import mongoose from "mongoose";

const User = new mongoose.Schema({
  name: {
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
  avator: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const UserSchema = mongoose.model("user", User);

export default UserSchema;
