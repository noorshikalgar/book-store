import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne, OneToMany, ManyToMany, JoinTable } from 'typeorm';
import { Book } from '../../book/entity/book.entity';

@Entity('author')
export class Author {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    first_name: string;

    @Column()
    last_name: string;

    @ManyToMany(type => Book, book => book.id, { onUpdate: "CASCADE", onDelete: "NO ACTION", nullable: true })
    @JoinTable()
    books: Book[]

}