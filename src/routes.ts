import { NextFunction, Response, NextFunction } from "express";
import { UserRoutes } from "./controller/UserController";
import { NoteRoutes } from "./controller/NoteController";

export const Routes = UserRoutes.concat(NoteRoutes);
