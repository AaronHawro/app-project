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
    
      async findOne(id: number): Promise<Comment> {
        return this.commentsRepository.findOneBy({id});
      }
    
      async create(data: CreateCommentDTO): Promise<Comment> {
        const newComment = this.commentsRepository.create(data);
        return this.commentsRepository.save(newComment);
      }
    
      async deleteById(id: number): Promise<void> {
        await this.commentsRepository.delete(id);
      }
}
