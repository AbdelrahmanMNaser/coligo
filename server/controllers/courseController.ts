import * as courseService from "@/services/courseService";
import { Request, Response } from "express";

export const createCourse = async (
  req: Request,
  res: Response,
  next: Function
) => {
  try {
    const course = await courseService.createCourse(req.body);
    res.status(201).json(course);
  } catch (error) {
    next(error);
  }
};

export const getCourses = async (
  _req: Request,
  res: Response,
  next: Function
) => {
  try {
    const courses = await courseService.getCourses();
    res.json(courses);
  } catch (error) {
    next(error);
  }
};

export const getCourseById = async (
  req: Request,
  res: Response,
  next: Function
) => {
  try {
    const course = await courseService.getCourseById(req.params.id ?? "");
    if (!course) return res.status(404).json({ error: "Course not found" });
    res.json(course);
  } catch (error) {
    next(error);
  }
};

export const updateCourse = async (
  req: Request,
  res: Response,
  next: Function
) => {
  try {
    const course = await courseService.updateCourse(req.params.id ?? "", req.body);
    if (!course) return res.status(404).json({ error: "Course not found" });
    res.json(course);
  } catch (error) {
    next(error);
  }
};

export const deleteCourse = async (
  req: Request,
  res: Response,
  next: Function
) => {
  try {
    const result = await courseService.deleteCourse(req.params.id ?? "");
    if (!result) return res.status(404).json({ error: "Course not found" });
    res.json({ message: "Course deleted" });
  } catch (error) {
    next(error);
  }
};