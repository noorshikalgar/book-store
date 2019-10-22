import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class AuthorMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    console.log("Middleware used ....");
    console.log(" Request : ", {
      "url": req.url,
      "method": req.method,
      "baseUrl": req.baseUrl,
      "original Url": req.originalUrl,
      "body": req.body,
      "params": req.param,
      "query": req.query
    });
    next();
  }
}
