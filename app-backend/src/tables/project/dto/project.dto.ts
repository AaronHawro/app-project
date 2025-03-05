import { IsNotEmpty } from "class-validator"

export class CreateProjectDTO {
    _id?: number;

    @IsNotEmpty()
    name: String;
    
    @IsNotEmpty()
    deadline: Date;
}