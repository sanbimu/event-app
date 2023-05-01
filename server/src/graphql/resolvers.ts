import type { IResolvers } from 'mercurius';
import type { FilterQuery } from 'mongoose';
import { Event, User } from '~/database/models';
import { generateDateFilter } from '~/utils/filters';
import { ObjectIDScalar } from './scalars';
import { formatDocumentsPagination, mergeDeep } from './utils';
import { Order, type Event as IEvent } from './schema';
import { GraphQLError } from 'graphql';

export const resolvers: IResolvers = {
  ObjectID: ObjectIDScalar,
  Query: {
    me: (_, __, { user }) => {
      return User.findOne({
        providerId: user.providerId,
        provider: user.provider,
      })
        .lean()
        .populate(['savedEvents', 'tickets']);
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

      if (!event) {
        throw new GraphQLError('EVENT_NOT_FOUND');
      }

      return await User.findOneAndUpdate(
        { _id: user._id },
        { $addToSet: { savedEvents: event._id } },
        { new: true },
      )
        .lean()
        .populate(['savedEvents', 'tickets']);
    },

    modifyUserInfo: async (_, { input }, { user }) => {
      const data = await User.findById(user._id).lean();
      return User.findOneAndUpdate(
        { _id: user._id },
        { $set: { info: mergeDeep(data.info, input) } },
        { new: true },
      ).lean();
    },

    removeSavedEvent: async (_, { id }, { user }) => {
      const event = await Event.findById(id).lean();

      if (!event) {
        throw new GraphQLError('EVENT_NOT_FOUND');
      }

      return await User.findOneAndUpdate(
        { _id: user._id },
        { $pull: { savedEvents: event._id } },
        { new: true },
      )
        .lean()
        .populate(['savedEvents', 'tickets']);
    },
  },
};
