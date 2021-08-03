import { NextFunction } from 'express';
import { Response } from 'express';
import { Request } from 'express';
import { UserController } from './controller/UserController';
import { NoteController } from "./controller/NoteController";


export const Routes = [

  {
    method: "get",
    route: "/users/:id",
    controller: UserController,
    action: "one",
  },
  {
    method: "post",
    route: "/users",
    controller: UserController,
    action: "save",
  },
  {
    method: "delete",
    route: "/users/:id",
    controller: UserController,
    action: "remove",
  },
  {
    method: "get",
    route: "/users/:id/notes",
    controller: NoteController,
    action: "all",
  },
  {
    method: "get",
    route: "/notes/:id",
    controller: NoteController,
    action: "one",
  },
  {
    method: "post",
    route: "/notes",
    controller: NoteController,
    action: "save",
  },
  {
    method: "delete",
    route: "/notes/:id",
    controller: NoteController,
    action: "remove",
  },
];
