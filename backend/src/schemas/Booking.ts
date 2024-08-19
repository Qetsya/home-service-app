import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema(
  {
    businessId: { type: String, required: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
    userEmail: {
      type: String,
      required: true,
      validate: {
        validator: function (email: string) {
          return /^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]+$/.test(email);
        },
        message: 'Invalid email format',
      },
    },
    userName: { type: String, minLength: 3, maxLength: 12, required: true },
    status: {
      type: String,
      required: true,
      enum: { values: ['confirmed', 'pending', 'cancelled'] },
    },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
