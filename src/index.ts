import "reflect-metadata";
import { createConnection } from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";
import { Request, Response } from "express";
import { Routes } from "./routes";
import * as cors from "cors";
import { MiddleWare } from "./middleware/MiddleWare";

createConnection()
  .then(async (connection) => {
    // create express app
    const app = express();
    app.use(bodyParser.json());
    app.use(cors("*"));

    // custom middleware

    const middleware = new MiddleWare();
    app.use(middleware.authMiddleWare);
    app.use(middleware.gmailMiddleware);

    // configure socket.io

    const http = require("http");
    const server = http.createServer(app);

    const io = require("socket.io")(server, {
      cors: {
        origin: "*",
        methods: ["GET", "POST"],
      },
    });

    // register socket middleware
    app.use((req, res, next) =>
      middleWare.socketMiddleWare(req, res, next, io)
    );

    // register express routes from defined application routes
    Routes.forEach((route) => {
      (app as any)[route.method](
        route.route,
        (req: Request, res: Response, next: Function) => {
          const result = new (route.controller as any)()[route.action](
            req,
            res,
            next
          );
          if (result instanceof Promise) {
            result.then((result) =>
              result !== null && result !== undefined
                ? res.send(result)
                : undefined
            );
          } else if (result !== null && result !== undefined) {
            res.json(result);
          }
        }
      );
    });

    app.get("/", (request: Request, response: Response) => {
      response.json("Visit https://github.com/OdidaProtas/Notes");
    });

    server.listen(process.env.PORT);

    console.log(`Express server started on port ${process.env.PORT}`);
  })
  .catch((error) => console.log(error));
