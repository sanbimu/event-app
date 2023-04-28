import type { IResolvers } from 'mercurius';
import type { FilterQuery } from 'mongoose';
import { Event, User } from '~/database/models';
import { generateDateFilter } from '~/utils/filters';
import { ObjectIDScalar } from './scalars';
import { formatDocumentsPagination } from './utils';
import { Order, type Event as IEvent } from './schema';

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
      return Event.findById(id).lean();
    },

    events: async (_, { order, first, after, date, label, query, saved }, { user }) => {
      const regex = { $regex: query, $options: 'i' };
      const filter: FilterQuery<IEvent> = {
        ...(after && { _id: { [order === Order.ASC ? '$gt' : '$lt']: after } }),
        ...(query && {
          $or: [{ title: regex }, { description: regex }, { 'location.label': regex }],
        }),
        ...(date && generateDateFilter(date)),
        ...(label && { label: { $in: [label] } }),
        ...(saved && { _id: { $in: user.savedEvents } }),
      };

      const events = await Event.find(filter)
        .sort({ _id: order === Order.ASC ? 1 : -1 })
        .limit(first + 1)
        .lean();

      return formatDocumentsPagination(events, first, after);
    },
  },

  Mutation: {
    addSavedEvent: async (_, { id }, { user }) => {
      const event = await Event.findById(id).lean();

      if (event) {
        await User.findOneAndUpdate(
          { _id: user._id },
          { $addToSet: { savedEvents: event._id } },
        );
      }

      return event;
    },

    removeSavedEvent: async (_, { id }, { user }) => {
      const event = await Event.findById(id).lean();

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
