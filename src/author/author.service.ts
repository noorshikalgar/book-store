import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from '../book/entity/book.entity';
import { Author } from './entity/author.entity';

@Injectable()
export class AuthorService {


    constructor(
        @InjectRepository(Book)
        private bookRepository: Repository<Book>,
        @InjectRepository(Author)
        private authorRepository: Repository<Author>
    ) {

    }


    async createAuthor(author) {
        return await this.authorRepository.save(author);
    }

    async createBooks(authorid, bookData: Book) {
        let id = Number(authorid);
        const book = await this.bookRepository.save(bookData);
        const author = await this.authorRepository.findOne(id, { relations: ["books"] });
        author.books.push(book);
        return await this.authorRepository.save(author);
    }

    async getBooksOfAuthor(authorid) {
        let id = Number(authorid);
        const author = await this.authorRepository.findOne(id, { relations: ["books"] });
        return author.books;

    }

    async getAuthor(authorid) {
        let id = Number(authorid);
        return this.authorRepository.findOne(id, { relations: ["books"] });
    }

    async updateAuthor(id: number, authorData) {
        console.log(id, authorData);
        return await this.authorRepository.update(id, authorData);
    }

}