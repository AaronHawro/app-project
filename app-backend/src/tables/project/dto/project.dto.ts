import { IsString } from "class-validator"

export class CreateProjectDTO {
    _id?: number;

    @IsString()
    name: string;
    
    // @IsDate()
    deadline: Date;

    // relations
    taskIds?: number[];

    teamIds?: number[];
}