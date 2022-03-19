import { Note } from "./../entity/Note";
import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import handleException from "./handleException";

export class NoteController {
  private noteRepository = getRepository(Note);

  async all(request: Request, response: Response, next: NextFunction) {
    const [data, err] = await handleException(
      this.noteRepository.find(req.params.id)
    );
    if (data) return data;
    else response.sendStatus(404);
  }

  async one(request: Request, response: Response, next: NextFunction) {
    const [data, err] = await handleException(
      this.noteRepository.findOne(request.params.id)
    );
    if (data) return data;
    else response.sendStatus(404);
  }

  async save(request: Request, response: Response, next: NextFunction) {
    const [data, err] = await handleException(
      this.noteRepository.save(request.body)
    );
    // use socket.io example
    const io = req["io"];
    io.emit("new_note", data);

    // use gmail example

    const gmail = req["gmail"];
    gmail
      .sendMail({
        from: `${process.env.MY_EMAIL}`,
        to: "",
        subject: "New note created",
        text: "Check new note", // plain text body
        html: `<b>Note details</b>`, // html body
      })
      .then((info) => {
        console.log({ info });
      })
      .catch(console.error);

    if (data) return data;
    else response.sendStatus(403);
  }

  async remove(request: Request, response: Response, next: NextFunction) {
    const [data, err] = await handleException(
      this.noteRepository.remove(request.params.id)
    );
    if (data) return data;
    else response.sendStatus(404);
  }
}
