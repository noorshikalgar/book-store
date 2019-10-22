import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { BookModule } from './book/book.module';
import { AuthorModule } from './author/author.module';
import { Book } from './book/entity/book.entity';
import { Author } from './author/entity/author.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'bookstore',
      entities: [Book, Author],
      synchronize: true,
    }),
    BookModule, AuthorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
