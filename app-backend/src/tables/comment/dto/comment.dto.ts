import { IsNotEmpty } from "class-validator"

export class CreateCommentDTO {
    _id?: number;

    @IsNotEmpty()
    comment: String;
}