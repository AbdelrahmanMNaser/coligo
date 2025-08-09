import  { model, Schema } from "mongoose";

import { EUserRole, type IUser } from "@/types/userTypes";

const userSchema: Schema<IUser> = new Schema({
  email: {
    type: String,
    unique: true,    
    trim: true,
    lowercase: true,
    required: [true, "Email is required"],
    validate: {
      validator: (value: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value);
      },
      message: "Email must be a valid email address",
    },
  },
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  role: {
    type: String,
    enum: Object.values(EUserRole),
    required: [true, "Role is required"],
  },
  profileImage: {
    type: String,
  },
});

const UserModel = model<IUser>("User", userSchema);

export default UserModel;
