import mongoose, { Document } from "mongoose";

export interface IAnnouncementInfo {
  title: string;
  message: string;
  courseId?: mongoose.Types.ObjectId; // optional reference to course
  createdBy: mongoose.Types.ObjectId; // user id
  createdAt?: Date;
}

export interface IAnnouncement extends Document, IAnnouncementInfo {}
