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
    
      async findOne(id: number): Promise<Task> {
        return this.tasksRepository.findOneBy({id});
      }
    
      async create(data: CreateTaskDTO): Promise<Task> {
        const newTask = this.tasksRepository.create(data);
        return this.tasksRepository.save(newTask);
      }
    
      async deleteById(id: number): Promise<void> {
        await this.tasksRepository.delete(id);
      }
}
