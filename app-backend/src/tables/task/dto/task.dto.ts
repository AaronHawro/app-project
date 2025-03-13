import { IsNumber, IsString } from "class-validator"

export class CreateTaskDTO {
    _id?: number;

    @IsString()
    overview: String;

    @IsString()
    description: String;

    @IsString()
    status: String;

    @IsNumber()
    placement: number;

    // relations
    userId: number | undefined;

    projectId: number | undefined;
}