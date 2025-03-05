import { IsNotEmpty } from 'class-validator';

export class CreateUserDTO {
    _id?: number;

    @IsNotEmpty()
    name: String;

    @IsNotEmpty()
    email: String;

    @IsNotEmpty()
    rank: String;
}