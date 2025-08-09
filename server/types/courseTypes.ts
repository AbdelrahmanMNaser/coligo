import mongoose, { Document } from "mongoose";

export interface ICourseInfo {
  title: string;
  description: string;
}

export interface ICourse extends Document, ICourseInfo {}
