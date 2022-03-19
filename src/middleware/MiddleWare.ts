import { Request, Response, NextFunction } from "express";

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

  async socketMiddleWare(req:Request, res:Response, next:NextFunction, io:any){
    req["io"] = io;
    io.on("connection", (socket:any)=>{
      console.log("A client connected")
    })
    next()
}
}
