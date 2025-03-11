import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { ProjectService } from './project.service';
import { Project } from './project.entity';
import { CreateProjectDTO } from './dto/project.dto';

@Controller('project')
export class ProjectController {
    constructor(private readonly projectService: ProjectService){}

    @Get()
    getProjects(): Promise<Project[]> {
        return this.projectService.findAll();
    }

    @Get('/id/:id')
    getProject(@Param() params: {id: number}): Promise<Project> {
        return this.projectService.findOne(params.id);
    }

    @Post()
    @UsePipes(new ValidationPipe())
    createProject(@Body() body: CreateProjectDTO): Promise<Project> {
        return this.projectService.create(body);
    }

    @Put('/id/:id')
    @UsePipes(new ValidationPipe())
    updateUser(@Param() params: {id: number}, @Body() createUserDTO: CreateProjectDTO): Promise<Project> {
        return this.projectService.update(params.id, createUserDTO);
    }

    @Delete('/id/:id')
    deleteProject(@Param() params: {id: number}): Promise<void> {
        return this.projectService.deleteById(params.id);
    }
}
