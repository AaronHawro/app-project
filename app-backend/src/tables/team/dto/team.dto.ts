import { IsString } from "class-validator";

export class CreateTeamDTO {
    _id?: number;

    @IsString()
    name: String;

    // relations
    userIds: number[] | undefined;
    
    projectIds: number[] | undefined;
}