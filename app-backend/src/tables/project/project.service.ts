import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from './project.entity';
import { Repository } from 'typeorm';

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
    
      async create(Project: Partial<Project>): Promise<Project> {
        const newProject = this.ProjectsRepository.create(Project);
        return this.ProjectsRepository.save(newProject);
      }
    
      async deleteById(id: number): Promise<void> {
        await this.ProjectsRepository.delete(id);
      }
}
