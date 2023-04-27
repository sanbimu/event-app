import { Schema, model } from 'mongoose';
import { EventLabel, EventStatus, EventType } from '~/shared/types';

interface Location {
  label: string;
  address: string;
}

interface Prices {
  label: string;
  price: number;
}

export interface EventDocument {
  location: Location;
  fromDate: string;
  toDate: string;
  title: string;
  description: string;
  stock: number;
  prices: Prices[];
  picture: string;
  labels: EventLabel[];
  type: EventType;
  status: EventStatus;
  salesCount: number;
}

export const EventSchema = new Schema<EventDocument>(
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

export const Event = model('Event', EventSchema);
