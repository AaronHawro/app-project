import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './task.entity';
import { CreateTaskDTO } from './dto/task.dto';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private tasksRepository: Repository<Task>,
  ) {}
  
  async findAll(): Promise<Task[]> {
    return this.tasksRepository.find();
  }

  async findOneById(id: number): Promise<Task | null> {
    const task = await this.tasksRepository.findOne({
      where: {id},
      relations: ['user', 'project', 'comments']
    });
    return task;
  }

  async create(data: CreateTaskDTO): Promise<Task> {
    const newTask = this.tasksRepository.create({
      ...data,
      project: {id: data.projectId}
    });
    return this.tasksRepository.save(newTask);
  }

  async update(id: number, data: CreateTaskDTO): Promise<Task> {
    const task = await this.tasksRepository.findOneBy({id});
    Object.assign(task, {
      ...data,
      user: {id: data.userId},
      project: {id: data.projectId},
      comments: {id: data.commentIds}
      });
    return this.tasksRepository.save(task);
  }

  async deleteById(id: number): Promise<void> {
    await this.tasksRepository.delete(id);
  }
}
