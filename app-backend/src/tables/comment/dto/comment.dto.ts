import { IsString } from "class-validator"

export class CreateCommentDTO {
    _id?: number;

    @IsString()
    comment: string;

    // realations
    userId?: number;

    taskId?: number;
}