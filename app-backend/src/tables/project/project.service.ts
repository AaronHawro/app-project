import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from './project.entity';
import { Repository } from 'typeorm';
import { CreateProjectDTO } from './dto/project.dto';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Project)
    private projectsRepository: Repository<Project>,
  ) {}

  async findAll(): Promise<Project[]> {
    return this.projectsRepository.find({
      relations: ['teams']
    });
  }

  async findOneById(id: number): Promise<Project | null> {
    const project = this.projectsRepository.findOne({
      where: {id},
      relations: ['tasks', 'teams']
    });
    return project;
  }

  async create(data: CreateProjectDTO): Promise<Project> {
    const newProject = this.projectsRepository.create(data);
    return this.projectsRepository.save(newProject);
  }

  async update(id: number, data: CreateProjectDTO): Promise<Project> {
    const project = await this.projectsRepository.findOneBy({id});
    Object.assign(project, {
      ...data,
      tasks: data.taskIds ? data.taskIds.map(tIds => ({id: tIds})) : project.tasks,
      teams: data.teamIds ? data.teamIds.map(tIds => ({id: tIds})) : project.teams
      });
    return this.projectsRepository.save(project);
  }

  async deleteById(id: number): Promise<void> {
    await this.projectsRepository.delete(id);
  }
}
