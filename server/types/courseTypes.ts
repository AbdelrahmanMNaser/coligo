import mongoose, { Document } from "mongoose";

export interface ICourseInfo {
  title: string;
  description: string;
  outcomes: string[];
  prerequisites: string[]; // string array of prerequisite course IDs
}

export interface ICourse extends Document, ICourseInfo {}
