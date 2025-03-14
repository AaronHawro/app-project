import { IsDate, IsString } from "class-validator"

export class CreateProjectDTO {
    _id?: number;

    @IsString()
    name: String;
    
    // @IsDate()
    deadline: Date;

    // relations
    taskIds: number[] | undefined;

    teamIds: number[] | undefined;
}