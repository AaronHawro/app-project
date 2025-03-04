import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Comment } from './comment.entity';
import { CommentService } from './comment.service';

@Module({
    imports: [TypeOrmModule.forFeature([Comment])],
    providers: [CommentService]
})
export class CommentModule {}
