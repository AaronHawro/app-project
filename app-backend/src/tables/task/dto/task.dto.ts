import { IsNumber, IsString } from "class-validator"

export class CreateTaskDTO {
    _id?: number;

    @IsString()
    description: String;

    @IsString()
    status: String;

    @IsNumber()
    placement: number;
}