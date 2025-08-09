import { ICourse } from "@/types/courseTypes";
import { model, Schema } from "mongoose";

const courseSchema: Schema<ICourse> = new Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
  },
  description: {
    type: String,
  },
  outcomes: {
    type: [String],
    default: [],
  },
  topics: [
    {
      _id: { type: Schema.Types.ObjectId, auto: true },
      title: { type: String, required: true },
      description: { type: String },
    },
  ],
  prerequisites: {
    type: [String],
    default: [],
  }, // array of prerequisite course IDs
});

const Course = model<ICourse>("Course", courseSchema);

export default Course;
