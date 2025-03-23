import { Component } from '@angular/core';
import { CommentService } from '../services/comment.service';

@Component({
  selector: 'app-comment-list',
  standalone: false,
  templateUrl: './comment-list.component.html',
  styleUrl: './comment-list.component.scss'
})
export class CommentListComponent {
  commentData: any;

  constructor(
    private commentService: CommentService,
  ) {}

  ngOnInit() {
    this.listComments()
  }

  listComments() {
    this.commentService.getComments().subscribe(comments => {
      this.commentData = comments;
    })
  }
}
