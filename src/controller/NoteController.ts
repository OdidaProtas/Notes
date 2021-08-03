import { Note } from './../entity/Note';
import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import handleException from './handleException';

export class NoteController {

    private noteRepository = getRepository(Note);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.noteRepository.find({where:{user: parseInt(request.params.id)}});
    }

    async one(request: Request, response: Response, next: NextFunction) {
        const [data, ] = await handleException(this.noteRepository.findOne(request.params.id));
        return data ? data : response.sendStatus(404);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        const [data, ] = await handleException(this.noteRepository.save(request.body));
        return data ? data : response.sendStatus(400);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        const [data, ] = await handleException(this.noteRepository.remove(request.params.id));
        return data ? data : response.sendStatus(403);
    }

}