import { Schema, model } from 'mongoose';
import {
  EventLabel,
  EventStatus,
  EventType,
  type Event as IEvent,
} from '~/graphql/schema';

export const EventSchema = new Schema<IEvent>(
  {
    location: {
      label: {
        type: String,
        index: true,
      },
      address: {
        type: String,
      },
    },
    fromDate: {
      type: String,
      required: true,
    },
    toDate: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
      index: true,
    },
    description: {
      type: String,
      required: true,
      index: true,
    },
    stock: {
      type: Number,
      required: true,
    },
    prices: [
      {
        label: String,
        price: Number,
      },
    ],
    picture: {
      type: String,
      default: '',
    },
    labels: [
      {
        type: String,
        enum: Object.values(EventLabel),
        default: [],
      },
    ],
    type: {
      type: String,
      enum: Object.values(EventType),
      default: EventType.CONCERT,
    },
    status: {
      type: String,
      enum: Object.values(EventStatus),
      default: EventStatus.NEW,
    },
    salesCount: {
      type: Number,
      default: 0,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

export const Event = model<IEvent>('Event', EventSchema);
