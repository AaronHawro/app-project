import { Component } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-project-view',
  standalone: false,
  templateUrl: './project-view.component.html',
  styleUrl: './project-view.component.scss'
})
export class ProjectViewComponent {
  projectData: any;
  tasksData: any[] = [];

  constructor(
    private projectService: ProjectService,
    private taskService: TaskService,
    private route: ActivatedRoute,
  ) {}


  ngOnInit() {
    this.findProjectDetails();
  }

  findProjectDetails() {
    const projectId = this.route.snapshot.params['id'];

    this.projectService.getProjectById(projectId).subscribe(project => {
      this.projectData = project;

      for (let i = 0; i < project.tasks.length; i++) {
        this.taskService.getTaskById(project.tasks[i].id).subscribe(task => {
          this.tasksData.push(task);
        })
      }
    })
  }
}
