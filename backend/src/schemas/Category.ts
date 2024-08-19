import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema(
  {
    name: { type: String, minLength: 3, maxLength: 12, required: true },
    bgcolor: { hex: { type: String, required: true, default: '#8056eb' } },
    icon: {
      url: {
        type: String,
        required: true,
        default: 'https://img.icons8.com/?size=100&id=59827&format=png&color=000000',
      },
    },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
