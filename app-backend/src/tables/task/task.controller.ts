import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { TaskService } from './task.service';
import { Task } from './task.entity';
import { CreateTaskDTO } from './dto/task.dto';

@Controller('task')
export class TaskController {
    constructor(private readonly taskService: TaskService){}

    @Get()
    getUsers(): Promise<Task[]> {
        return this.taskService.findAll();
    }

    @Get('/id/:id')
    getTask(@Param() params: {id: number}): Promise<Task> {
        return this.taskService.findOne(params.id);
    }

    @Post()
    @UsePipes(new ValidationPipe())
    createTask(@Body() body: CreateTaskDTO): Promise<Task> {
        return this.taskService.create(body);
    }

    @Put('/id/:id')
    @UsePipes(new ValidationPipe())
    updateUser(@Param() params: {id: number}, @Body() createUserDTO: CreateTaskDTO): Promise<Task> {
        return this.taskService.update(params.id, createUserDTO);
    }

    @Delete('/id/:id')
    deleteTask(@Param() params: {id: number}): Promise<void> {
        return this.taskService.deleteById(params.id);
    }
}
