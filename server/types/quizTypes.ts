import mongoose, { Document } from "mongoose";

export interface IQuizQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
}

export interface IQuizInfo {
  title: string;
  courseId: mongoose.Types.ObjectId; // reference to course
  topicId: mongoose.Types.ObjectId; // reference to course topic
  questions: IQuizQuestion[];
  createdBy: mongoose.Types.ObjectId; // user id
  dueDate?: Date;
  dueTime?: string;
  createdAt?: Date;
}

export interface IQuiz extends Document, IQuizInfo {}
