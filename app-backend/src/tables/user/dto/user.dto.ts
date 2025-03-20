import { IsEmail, IsString } from 'class-validator';

export class CreateUserDTO {
    _id?: number;

    @IsString()
    name: string;

    @IsString()
    username: string;

    @IsString()
    password: string;

    @IsEmail()
    email: string;

    @IsString()
    rank: string;

    // relations
    teamId?: number;

    taskIds?: number[];

    commentIds?: number[];
}