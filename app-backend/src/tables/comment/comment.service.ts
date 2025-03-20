import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Comment } from './comment.entity';
import { Repository } from 'typeorm';
import { CreateCommentDTO } from './dto/comment.dto';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(Comment)
    private commentsRepository: Repository<Comment>,
  ) {}
  
  async findAll(): Promise<Comment[]> {
    return this.commentsRepository.find();
  }

  async findOneById(id: number): Promise<Comment | null> {
    const comment = await this.commentsRepository.findOne({
      where: {id},
      relations: ['user', 'task']
    });
    return comment;
  }

  async create(data: CreateCommentDTO): Promise<Comment> {
    const newComment = this.commentsRepository.create(data);
    return this.commentsRepository.save(newComment);
  }

  async update(id: number, data: CreateCommentDTO): Promise<Comment> {
    const comment = await this.commentsRepository.findOneBy({id});
    Object.assign(comment, {
      ...data,
      user: data.userId ? {id: data.userId} : comment.user,
      task: data.taskId ? {id: data.taskId} : comment.task
    });
    return this.commentsRepository.save(comment);
  }

  async deleteById(id: number): Promise<void> {
    await this.commentsRepository.delete(id);
  }
}
