import { Controller, Get, Post, Put, Param, Body, UseFilters } from '@nestjs/common';
import { AuthorService } from './author.service';
import { AuthorDTO } from './dto/author.dto';
import { BookDTO } from '../book/dto/book.dto';
import { ApiImplicitParam } from '@nestjs/swagger';
import { CreateAuthor } from './dto/createAuthor.dto';

@Controller('author')
export class AuthorController {

    constructor(private authorService: AuthorService) { }


    @Get(":id")
    @ApiImplicitParam({ name: "id", required: true })
    getAuthor(@Param("id") authorid) {
        return this.authorService.getAuthor(authorid);
    }

    @Get("/get-books/:id")
    @ApiImplicitParam({ name: "id", required: true })
    getBooksByAuthor(@Param("id") authorid) {
        return this.authorService.getBooksOfAuthor(authorid);
    }

    @Post("/create")
    create(@Body() authorDTO: AuthorDTO) {
        return this.authorService.createAuthor(authorDTO);
    }

    @Post("/create-books/:id")
    @ApiImplicitParam({ name: "id", required: true })
    async createBooks(@Param('id') authorid, @Body() bookDTO: BookDTO) {
        return await this.authorService.createBooks(authorid, bookDTO);
    }


    @Put("/update/:id")
    @ApiImplicitParam({ name: "id", required: true })
    updateAuthor(@Param("id") id, @Body() author: AuthorDTO) {
        return this.authorService.updateAuthor(id, author);
    }

}
