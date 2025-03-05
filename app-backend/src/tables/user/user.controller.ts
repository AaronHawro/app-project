import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
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

    @Get('/:id')
    getUser(@Param() params: {id: number}): Promise<User> {
        return this.userService.findOne(params.id);
    }

    @Post()
    createUser(@Body() body: CreateUserDTO): Promise<User> {
        return this.userService.create(body);
    }

    @Delete()
    deleteUser(@Param() params: {id: number}): Promise<void> {
        return this.userService.deleteById(params.id);
    }
}
