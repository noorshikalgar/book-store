import { ApiModelProperty } from '@nestjs/swagger';

export class CreateAuthor {

    @ApiModelProperty()
    id?: number;
    @ApiModelProperty()
    first_name?: string;
    @ApiModelProperty()
    last_name?: string;
}