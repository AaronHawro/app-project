import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { CommentService } from './comment.service';
import { Comment } from './comment.entity';
import { CreateCommentDTO } from './dto/comment.dto';

@Controller('comment')
export class CommentController {
    constructor(private readonly commentService: CommentService){}

    @Get()
    getComments(): Promise<Comment[]> {
        return this.commentService.findAll();
    }

    @Get('/id/:id')
    getCommentById(@Param() params: {id: number}): Promise<Comment | null> {
        return this.commentService.findOneById(params.id);
    }

    @Post()
    @UsePipes(new ValidationPipe())
    createComment(@Body() body: CreateCommentDTO): Promise<Comment> {
        return this.commentService.create(body);
    }

    @Put('/id/:id')
    @UsePipes(new ValidationPipe())
    updateUser(@Param() params: {id: number}, @Body() createUserDTO: CreateCommentDTO): Promise<Comment> {
        return this.commentService.update(params.id, createUserDTO);
    }

    @Delete('/id/:id')
    deleteComment(@Param() params: {id: number}): Promise<void> {
        return this.commentService.deleteById(params.id);
    }
}
