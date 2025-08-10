import UserModel from "@/models/userModel";
import { IUser } from "@/types/userTypes";

export async function createUser(data: Partial<IUser>) {
  const user = new UserModel(data);
  return await user.save();
}

export async function getUsers() {
  return await UserModel.find();
}

export async function getUserById(id: string) {
  return await UserModel.findById(id);
}

export async function updateUser(id: string, data: Partial<IUser>) {
  return await UserModel.findByIdAndUpdate(id, data, { new: true });
}

export async function deleteUser(id: string) {
  return await UserModel.findByIdAndDelete(id);
}
