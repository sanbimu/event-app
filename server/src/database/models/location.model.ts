import { Schema, model } from 'mongoose';

export interface LocationDocument {
  label: string;
  address: string;
}

export const LocationSchema = new Schema<LocationDocument>(
  {
    label: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const Location = model('Location', LocationSchema);
