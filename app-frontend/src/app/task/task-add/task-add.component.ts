import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { UserService } from '../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-task-add',
  standalone: false,
  templateUrl: './task-add.component.html',
  styleUrl: './task-add.component.scss'
})
export class TaskAddComponent {
  usersData: any[] = [];

  constructor(
    private taskService: TaskService,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  addName: string; addDesc:string; assignUser: number;
  result: string;

  ngOnInit() {
    this.userService.getUsers().subscribe(user => {
      for (let i = 0; i < user.length; i++) {
        this.usersData.push(user[i]);
      }
    })
  }

  addTask() {
    let taskData = {
      overview: this.addName,
      description: this.addDesc,
      status: 'not done',
      placement: 1,
      user: this.assignUser,
      project: this.route.snapshot.params['id'],
      comments: []
    }

    if (this.assignUser == null) {
      this.result = 'You need to assign a User to create a new task';
    }else {
      this.taskService.createTask(taskData).subscribe({
        next: (task: any) => {
          this.taskService.updateTask(task.id, taskData).subscribe({
            next: () => {
              this.router.navigate([`/task-view/${task.id}`]);
  
              this.result = 'Project added successfully';
            }
          });
        },
        error: () => {
          this.result = 'Project could not be added';
        }
      })
    }
  }
}
