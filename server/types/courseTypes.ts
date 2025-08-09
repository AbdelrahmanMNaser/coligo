import { Types, Document } from "mongoose";

export interface ITopic {
  _id?: Types.ObjectId;
  title: string;
  description?: string;
}

export interface ICourseInfo {
  title: string;
  description: string;
  outcomes: string[];
  topics: ITopic[];
  prerequisites: string[]; // string array of prerequisite course IDs
}

export interface ICourse extends Document, ICourseInfo {}
