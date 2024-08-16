import mongoose from "mongoose";

const businessSchema = new mongoose.Schema(
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
        validator: function(email: string) {
          return /^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]+$/.test(email);
        },
        message: "Invalid email format",
      },
    },
    images: [{ url: { type: [String], required: true } }],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Business = mongoose.model("Business", businessSchema);

module.exports = Business;
