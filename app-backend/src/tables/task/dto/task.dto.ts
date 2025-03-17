import { IsNumber, IsString } from "class-validator"

export class CreateTaskDTO {
    _id?: number;

    @IsString()
    overview: string;

    @IsString()
    description: string;

    @IsString()
    status: string;

    @IsNumber()
    placement: number;

    // relations
    userId?: number;

    projectId?: number;

    commentIds?: number[];
}