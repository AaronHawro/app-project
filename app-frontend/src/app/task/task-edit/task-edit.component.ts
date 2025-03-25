import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-task-edit',
  standalone: false,
  templateUrl: './task-edit.component.html',
  styleUrl: './task-edit.component.scss'
})
export class TaskEditComponent {
  taskData: any;
  
  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  editName: string; editDesc:string;
  result: string;

  ngOnInit() {
    const taskId = this.route.snapshot.params['id'];
    this.taskService.getTaskById(taskId).subscribe(task => {
      this.taskData = task;

      this.editName = task.overview;
      this.editDesc = task.description;
    })
    
  }

  updateTask() {
    let taskData = {
      overview: this.editName,
      description: this.editDesc,
      status: this.taskData.status,
      placement: this.taskData.placement,
      user: this.taskData.user,
      project: this.taskData.project,
      comments: this.taskData.comments
    }

    this.taskService.updateTask(this.taskData.id, taskData).subscribe({
      next: (task: any) => {
        this.result = 'Task updated successfully';

        this.router.navigate([`/task-view/${task.id}`]);
      },
      error: () => {
        this.result = 'Task could not be updated';
      },
    })
  }
}
