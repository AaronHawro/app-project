import { Body, Controller, Delete, Get, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
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

    @Get('/:id')
    getTask(@Param() params: {id: number}): Promise<Task> {
        return this.taskService.findOne(params.id);
    }

    @Post()
    @UsePipes(new ValidationPipe())
    createTask(@Body() body: CreateTaskDTO): Promise<Task> {
        return this.taskService.create(body);
    }

    @Delete('/:id')
    deleteTask(@Param() params: {id: number}): Promise<void> {
        return this.taskService.deleteById(params.id);
    }
}
