import { ApiModelProperty } from "@nestjs/swagger";
import { Author } from "../../author/entity/author.entity";

export class BookDTO {

    @ApiModelProperty()
    readonly id: number;

    @ApiModelProperty()
    readonly title: string;

    @ApiModelProperty()
    readonly description: string;

    @ApiModelProperty()
    readonly is_published: boolean;

}