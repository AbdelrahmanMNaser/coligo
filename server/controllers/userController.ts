import * as userService from "@/services/userService";
import { Request, Response } from "express";

export const createUser = async (
  req: Request,
  res: Response,
  next: Function
) => {
  try {
    const user = await userService.createUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
};

export const getUsers = async (
  _req: Request,
  res: Response,
  next: Function
) => {
  try {
    const users = await userService.getUsers();
    res.json(users);
  } catch (error) {
    next(error);
  }
};

export const getUserById = async (
  req: Request,
  res: Response,
  next: Function
) => {
  try {
    const user = await userService.getUserById(req.params.id ?? "");
    if (!user) return res.status(404).json({ error: "User not found" });
    res.json(user);
  } catch (error) {
    next(error);
  }
};

export const updateUser = async (
  req: Request,
  res: Response,
  next: Function
) => {
  try {
    const user = await userService.updateUser(req.params.id ?? "", req.body);
    if (!user) return res.status(404).json({ error: "User not found" });
    res.json(user);
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (
  req: Request,
  res: Response,
  next: Function
) => {
  try {
    const result = await userService.deleteUser(req.params.id?? "");
    if (!result) return res.status(404).json({ error: "User not found" });
    res.json({ message: "User deleted" });
  } catch (error) {
    next(error);
  }
};
