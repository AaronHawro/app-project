import { IsNotEmpty } from "class-validator"

export class CreateTaskDTO {
    _id?: number;

    @IsNotEmpty()
    description: String;

    status: String;

    placement: number;
}