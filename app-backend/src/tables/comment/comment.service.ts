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
        const newComment = this.commentsRepository.create({
          ...data,
          user: {id: data.userId},
          task: {id: data.taskId}
        });
        return this.commentsRepository.save(newComment);
      }

      async update(id: number, data: CreateCommentDTO): Promise<Comment> {
        this.commentsRepository.update(id, data);
        return this.commentsRepository.findOneBy({id});
      }
    
      async deleteById(id: number): Promise<void> {
        await this.commentsRepository.delete(id);
      }
}
