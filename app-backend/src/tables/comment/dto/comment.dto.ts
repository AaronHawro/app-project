import { IsString } from "class-validator"

export class CreateCommentDTO {
    _id?: number;

    @IsString()
    comment: String;

    // realations
    userId: number | undefined;

    taskId: number | undefined;
}