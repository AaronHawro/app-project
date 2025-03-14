import { IsEmail, IsString } from 'class-validator';

export class CreateUserDTO {
    _id?: number;

    @IsString()
    name: String;

    @IsString()
    username: String;

    @IsString()
    password: String;

    @IsEmail()
    email: String;

    @IsString()
    rank: String;

    // relations
    teamId: number | undefined;
}