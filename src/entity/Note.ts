import { User } from './User';
import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";

@Entity()
export class Note {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: true
    })
    title: string;

    @Column({
        nullable: true
    })
    subtitle: string;

    @Column()
    content: string;

    @Column({
        type: "timestamp",
    })
    date: string;

    @Column({
        default: false
    })
    isImportant: boolean;

    @ManyToOne(()=> User, user=> user.notes)
    user: User
}
