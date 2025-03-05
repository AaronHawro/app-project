import { IsNotEmpty } from "class-validator";

export class CreateTeamDTO {
    _id?: number;

    @IsNotEmpty()
    name: String;
}