import type { IResolvers } from 'mercurius';
import type { FilterQuery } from 'mongoose';
import { ObjectId } from 'mongodb';
import { GraphQLError } from 'graphql';
import { Event, User } from '~/database/models';
import { generateDateFilter } from '~/utils/filters';
import { ObjectIDScalar } from './scalars';
import { formatDocumentsPagination, mergeDeep } from './utils';
import { Order, type Event as IEvent } from './schema';

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

    event: async (_, { id }, { user }) => {
      const event = await Event.findById(id).lean();

      if (!event) {
        return null;
      }

      const events = user.savedEvents.map((e) => e._id.toString());
      event.saved = events.includes(id.toString());

      return event;
    },

    events: async (
      _,
      { order, first, after, query, date, label, type, saved },
      { user },
    ) => {
      const regex = { $regex: query, $options: 'i' };
      const filter: FilterQuery<IEvent> = {
        ...(after && { _id: { [order === Order.ASC ? '$gt' : '$lt']: after } }),
        ...(query && {
          $or: [{ title: regex }, { description: regex }, { 'location.label': regex }],
        }),
        ...(date && generateDateFilter(date)),
        ...(label && { labels: { $in: [label] } }),
        ...(type && { type: type }),
        ...(saved && { _id: { $in: user.savedEvents } }),
      };

      const events = await Event.find(filter)
        .sort({ _id: order === Order.ASC ? 1 : -1 })
        .limit(first + 1)
        .lean();

      return formatDocumentsPagination(events, order, first, after);
    },
  },

  Mutation: {
    addSavedEvent: async (_, { id }, { user }) => {
      const event = await Event.findById(id).lean();

      if (!event) {
        throw new GraphQLError('EVENT_NOT_FOUND');
      }

      const doc = await User.findOneAndUpdate(
        { _id: user._id, savedEvents: { $nin: [event._id] } },
        { $addToSet: { savedEvents: event._id } },
      ).lean();

      return !!doc;
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

      const doc = await User.findOneAndUpdate(
        { _id: user._id, savedEvents: { $in: [event._id] } },
        { $pull: { savedEvents: event._id } },
        { new: true },
      ).lean();

      return !!doc;
    },
  },
};
