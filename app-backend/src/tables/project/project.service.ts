import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from './project.entity';
import { Repository } from 'typeorm';
import { CreateProjectDTO } from './dto/project.dto';

@Injectable()
export class ProjectService {
      constructor(
        @InjectRepository(Project)
        private ProjectsRepository: Repository<Project>,
      ) {}
    
      async findAll(): Promise<Project[]> {
        return this.ProjectsRepository.find();
      }
    
      async findOne(id: number): Promise<Project> {
        return this.ProjectsRepository.findOneBy({id});
      }
    
      async create(data: CreateProjectDTO): Promise<Project> {
        const newProject = this.ProjectsRepository.create(data);
        return this.ProjectsRepository.save(newProject);
      }
    
      async deleteById(id: number): Promise<void> {
        await this.ProjectsRepository.delete(id);
      }
}
