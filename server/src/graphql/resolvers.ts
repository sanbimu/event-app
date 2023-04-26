import type { IResolvers } from 'mercurius';
import type { FilterQuery } from 'mongoose';
import type { EventDocument } from '~/database/models';
import { Event, User } from '~/database/models';
import { makeDateFilter } from '~/utils/filters';
import { Order } from './schema';
import { ObjectIDScalar } from './scalars';
import { formatDocumentsPagination } from './utils';

export const resolvers: IResolvers = {
  ObjectID: ObjectIDScalar,
  Query: {
    me: (_, __, { user }) => {
      return User.findOne({
        providerId: user.providerId,
        provider: user.provider,
      })
        .populate(['savedEvents', 'tickets'])
        .lean();
    },

    event: (_, { id }) => {
      return Event.findById(id).populate(['location']).lean();
    },

    events: async (_, { order, first, after, date, label, query, saved }, { user }) => {
      const filter: FilterQuery<EventDocument> = {
        ...(after && { _id: { $gt: after } }),
        ...(query && { $text: { $search: query } }),
        ...(date && { date: makeDateFilter(date) }),
        ...(label && { label: { $in: [label] } }),
        ...(saved && { _id: { $in: user.savedEvents } }),
      };

      const events = await Event.find(filter)
        .sort({ date: order === Order.ASC ? 1 : -1 })
        .limit(first + 1)
        .populate(['location'])
        .lean();

      return formatDocumentsPagination(events, first, after);
    },
  },

  Mutation: {
    addSavedEvent: async (_, { id }, { user }) => {
      const event = await Event.findById(id).populate(['location']).lean();

      if (event) {
        await User.findOneAndUpdate(
          { _id: user._id },
          { $push: { savedEvents: event._id } },
        );
      }

      return event;
    },

    removeSavedEvent: async (_, { id }, { user }) => {
      const event = await Event.findById(id).populate(['location']).lean();

      if (event) {
        await User.findOneAndUpdate(
          { _id: user._id },
          { $pull: { savedEvents: event._id } },
        );
      }

      return event;
    },
  },
};
