import CourseModel from "@/models/courseModel";
import { ICourse } from "@/types/courseTypes";

export async function createCourse(data: Partial<ICourse>) {
  if (!data || !data.title) 
    throw new Error("Title is required");
  
  const course = new CourseModel(data);
  return await course.save();
}

export async function getCourses() {
  return await CourseModel.find();
}

export async function getCourseById(id: string) {
  if (!id) 
    throw new Error("Invalid course id");
  
  const foundCourse = await CourseModel.findById(id);
  
  if (!foundCourse) 
    throw new Error("Course not found");
  
  return foundCourse;
}

export async function updateCourse(id: string, data: Partial<ICourse>) {
  if (!id) 
    throw new Error("Invalid course id");
  if (!data || Object.keys(data).length === 0) 
    throw new Error("No data provided to update");

  const updatedCourse = await CourseModel.findByIdAndUpdate(id, data, { new: true });
  
  if (!updatedCourse) 
    throw new Error("Course not found");

  return updatedCourse;
}

export async function deleteCourse(id: string) {
  if (!id) 
    throw new Error("Invalid course id");

  const foundCourse = await getCourseById(id);

  if (!foundCourse) 
    throw new Error("Course not found");

  return await CourseModel.findByIdAndDelete(id);
}
