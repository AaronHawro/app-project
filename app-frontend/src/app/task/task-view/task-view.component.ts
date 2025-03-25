import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { CommentService } from '../../services/comment.service';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-task-view',
  standalone: false,
  templateUrl: './task-view.component.html',
  styleUrl: './task-view.component.scss'
})
export class TaskViewComponent {
  taskData: any;
  userData: any;
  commentsData: any[] = [];

  constructor(
    private taskService: TaskService,
    private commentService: CommentService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  
  newComment: string;
  result: string;

  ngOnInit() {
    const taskId = this.route.snapshot.params['id'];
    this.taskService.getTaskById(taskId).subscribe(task => {
      this.taskData = task;

      for (let i = 0; i < task.comments.length; i++) {
        this.commentService.getCommentById(task.comments[i].id).subscribe(comment => {
          this.commentsData.push(comment);
        })
      }
    })

    this.authService.currentUser$.subscribe(user => {
      this.userData = user;
    })
  }

  postComment() {
    let commentData = {
      comment: this.newComment,
      user: this.userData.id,
      task: this.taskData.id
    }

    this.commentService.createComment(commentData).subscribe({
      next: (addedComment: any) => {
        this.commentService.updateComment(addedComment.id, commentData).subscribe((updatedComment: any) => {
          this.commentService.getCommentById(updatedComment.id).subscribe(comment => {
            this.commentsData.push(comment);
          })
        })
      }
    })
  }

  markAsDone() {
    this.authService.currentUser$.subscribe(user => {
      if (user?.username == this.taskData.user.username) {
        let taskData = {
          overview: this.taskData.overview,
          description: this.taskData.description,
          status: 'done',
          placement: this.taskData.placement,
          user: this.taskData.user,
          project: this.taskData.project,
          comments: this.taskData.comments
        }
    
        this.taskService.updateTask(this.taskData.id, taskData).subscribe({
          next: () => {
            this.router.navigate([`/project-view/${this.taskData.project.id}`]);
          }
        })
      }else {
        this.result = 'This task does not belong to you';
      }
    })
  }

  confirmDel() {
    if(confirm("Are you sure you want to delete this task?")) {
      this.taskService.deleteTask(this.taskData.id).subscribe()
      this.router.navigate([`/project-view/${this.taskData.project.id}`]);
    }
  }
}
