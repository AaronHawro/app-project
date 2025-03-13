import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './task.entity';
import { CreateTaskDTO } from './dto/task.dto';
import { Comment } from '../comment/comment.entity';

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

  async findTaskComments(id: number): Promise<Comment[]> {
    const task = await this.tasksRepository.findOne({
      where: {id},
      relations: ['comments']
    });
    return task!.comments;
  }

  async create(data: CreateTaskDTO): Promise<Task> {
    const newTask = this.tasksRepository.create({
      ...data,
      user: {id: data.userId},
      project: {id: data.projectId}
    });
    return this.tasksRepository.save(newTask);
  }

  async update(id: number, data: CreateTaskDTO): Promise<Task> {
    this.tasksRepository.update(id, data);
    return this.tasksRepository.findOneBy({id});
  }

  async deleteById(id: number): Promise<void> {
    await this.tasksRepository.delete(id);
  }
}
