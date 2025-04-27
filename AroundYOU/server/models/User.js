// models/User.js
import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,  // To ensure the email is unique in the collection
  },
  username: {
    type: String,
    required: true,
    unique: true,  // You might want to ensure unique usernames
  },
  role: {

    type: String,
    enum: ["Admin", "Student", "Alumni"],
    required: true

  },
  password: {
    type: String,
    required: true,
  },
});

export default model('User', UserSchema);
