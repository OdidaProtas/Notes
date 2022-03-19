import { Request, Response, NextFunction } from "express";
import * as nodemailer from "nodemailer";

export class MiddleWare {
  async authMiddleWare(req: Request, res: Response, next: NextFunction) {
    const token =
      request.body.token ||
      request.body.access_token ||
      request.query.access_token;
    request.query.token ||
      request.headers["access_token"] ||
      request.headers["token"];

    if (!token) {
      req["user"] = null;
    } else {
      req["user"] = token;
    }

    return next();
  }

  async socketMiddleWare(
    req: Request,
    res: Response,
    next: NextFunction,
    io: any
  ) {
    req["io"] = io;
    io.on("connection", (socket: any) => {
      console.log("A client connected");
    });
    next();
  }

  async gmailMiddleware(req: Request, res: Response, next: NextFunction) {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      auth: {
        user: process.env.MY_EMAIL,
        pass: process.env.MY_EMAIL_PASS,
      },
    });
    transporter.verify().then(console.log).catch(console.error);
    req["gmail"] = transporter;
    next();
  }
}
