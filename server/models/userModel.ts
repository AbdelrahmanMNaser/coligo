import  { model, Schema } from "mongoose";

import { EUserRole, type IUser } from "@/types/userTypes";

const userSchema: Schema<IUser> = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: Object.values(EUserRole),
    required: true,
  },
  profileImage: {
    type: String,
  },
});

const UserModel = model<IUser>("User", userSchema);

export default UserModel;
