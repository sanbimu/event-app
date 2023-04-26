import type { LocationDocument } from './location.model';
import { Schema, model } from 'mongoose';
import { EventStatus } from '~/shared/types';
import { LocationSchema } from './location.model';

export interface EventDocument {
  location: LocationDocument;
  fromDate: string;
  toDate: string;
  title: string;
  description: string;
  stock: number;
  price: number;
  picture: string;
  labels: string[];
  status: EventStatus;
  salesCount: number;
}

export const EventSchema = new Schema<EventDocument>(
  {
    location: LocationSchema,
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
      text: true,
    },
    description: {
      type: String,
      required: true,
      text: true,
    },
    stock: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    picture: {
      type: String,
      default: '',
    },
    labels: [
      {
        type: String,
        default: [],
      },
    ],
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
