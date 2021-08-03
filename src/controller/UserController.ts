import { User } from './../entity/User';
import {NextFunction, Request, Response} from "express";
import { getRepository } from 'typeorm';
import handleException from './handleException';


export class UserController{

    private userRepository = getRepository(User);

    async one(request: Request, response: Response, next: NextFunction) {
        const [data, ] = await handleException(this.userRepository.findOne(request.params.id));
        return data ? data : response.sendStatus(404);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        const [data, ] = await handleException(this.userRepository.save(request.body));
        return data ? data : response.sendStatus(400);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        const [data, ] = await handleException(this.userRepository.remove(request.params.id));
        return data ? data : response.sendStatus(400);
    }

}