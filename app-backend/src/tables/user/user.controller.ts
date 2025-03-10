import { Body, Controller, Delete, Get, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import { CreateUserDTO } from './dto/user.dto';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService){}

    @Get()
    getUsers(): Promise<User[]> {
        return this.userService.findAll();
    }

    @Get('/id/:id')
    getUserById(@Param() params: {id: number}): Promise<User> {
        return this.userService.findById(params.id);
    }

    @Get('/username/:username')
    getUserByName(@Param() params: {username: string}): Promise<User | null> {
        return this.userService.findByUsername(params.username);
    }

    @Post()
    @UsePipes(new ValidationPipe())
    createUser(@Body() body: CreateUserDTO): Promise<User> {
        return this.userService.create(body);
    }

    @Delete('/id/:id')
    deleteUser(@Param() params: {id: number}): Promise<void> {
        return this.userService.deleteById(params.id);
    }
}
