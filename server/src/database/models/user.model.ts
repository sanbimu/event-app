import type { EventDocument } from './event.model';
import { Schema, model } from 'mongoose';
import { Provider } from '~/shared/types';
import { EventSchema } from './event.model';
import { TicketSchema } from './ticket.model';

export interface UserDocument {
  provider: Provider;
  providerId: string;
  firstName: string;
  lastName: string;
  email: string;
  avatar: string;
  savedEvents: EventDocument[];
  tickets: string[];
}

export const UserSchema = new Schema<UserDocument>(
  {
    provider: {
      type: String,
      enum: Object.values(Provider),
      index: true,
    },
    providerId: {
      type: String,
      default: null,
      index: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      required: true,
    },
    savedEvents: [EventSchema],
    tickets: [TicketSchema],
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const User = model<UserDocument>('User', UserSchema);
