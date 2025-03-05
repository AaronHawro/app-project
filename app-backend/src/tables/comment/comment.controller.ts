import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CommentService } from './comment.service';
import { Comment } from './comment.entity';
import { CreateUserDTO } from '../user/dto/user.dto';

@Controller('comment')
export class CommentController {
    constructor(private readonly commentService: CommentService){}

    @Get()
    getComments(): Promise<Comment[]> {
        return this.commentService.findAll();
    }

    @Get('/:id')
    getComment(@Param() params: {id: number}): Promise<Comment> {
        return this.commentService.findOne(params.id);
    }

    @Post()
    createComment(@Body() body: CreateUserDTO): Promise<Comment> {
        return this.commentService.create(body); // cant find cause
    }

    @Delete()
    deleteComment(@Param() params: {id: number}): Promise<void> {
        return this.commentService.deleteById(params.id);
    }
}
