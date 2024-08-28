import mongoose, { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    user_name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    phone_number: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Users = model('Users', userSchema);
