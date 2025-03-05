import { IsString } from "class-validator";

export class CreateTeamDTO {
    _id?: number;

    @IsString()
    name: String;
}