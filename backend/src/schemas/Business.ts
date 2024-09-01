import mongoose from 'mongoose';
import { Business } from '../models/BusinessModel';

const businessSchema = new mongoose.Schema<Business>(
  {
    name: { type: String, minLength: 3, maxLength: 15, required: true },
    about: { type: String, required: true },
    address: { type: String, required: true },
    category: { type: String, required: true },
    contactPerson: { type: String, required: true },
    email: {
      type: String,
      required: true,
      validate: {
        validator: function (email: string) {
          return /^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]+$/.test(email);
        },
        message: 'Invalid email format',
      },
    },
    imageUrls: [
      {
        type: String,
        required: true,
      },
    ],
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

const Business = mongoose.model('Business', businessSchema);

module.exports = Business;
