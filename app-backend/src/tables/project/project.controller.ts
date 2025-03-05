import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
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
    
        @Get('/:id')
        getProject(@Param() params: {id: number}): Promise<Project> {
            return this.projectService.findOne(params.id);
        }
    
        @Post()
        createProject(@Body() body: CreateProjectDTO): Promise<Project> {
            return this.projectService.create(body);
        }
    
        @Delete('/:id')
        deleteProject(@Param() params: {id: number}): Promise<void> {
            return this.projectService.deleteById(params.id);
        }
}
