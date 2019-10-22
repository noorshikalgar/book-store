import { ApiModelProperty } from '@nestjs/swagger';
import { Book } from '../../book/entity/book.entity';

export class AuthorDTO {

    @ApiModelProperty()
    id: number;

    @ApiModelProperty()
    first_name: string;

    @ApiModelProperty()
    last_name: string;

    @ApiModelProperty({ nullable: true })
    books?: Book[]


}