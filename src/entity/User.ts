import { Note } from './Note';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        unique: true
    })
    email: string

    @OneToMany(()=> Note, note=> note.user)
    notes: Note[]

}