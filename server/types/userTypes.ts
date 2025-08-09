import mongoose, {Document} from 'mongoose';

export enum EUserRole {
  STUDENT = 'student',
  TEACHER = 'teacher'
}

export interface IUserLoginInfo {
  email: string;
  password: string;
}
export interface IUserInfo {
  email: string;
  name: string;
  password: string;
  role: EUserRole;
  profileImage?: string; // optional profile image
}

export interface IUser extends Document, IUserInfo {}