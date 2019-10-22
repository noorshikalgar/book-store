import { PrimaryGeneratedColumn, Column, Entity, JoinColumn, OneToMany, ManyToMany, ManyToOne, JoinTable } from "typeorm";
import { Author } from "../../author/entity/author.entity";

@Entity('book')
export class Book {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    is_published: boolean;

}