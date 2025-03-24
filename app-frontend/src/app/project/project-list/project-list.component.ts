import { Component } from '@angular/core';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-project-list',
  standalone: false,
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.scss'
})
export class ProjectListComponent {
  projectData: any;

  constructor(
    private projectService: ProjectService,
  ) {}

  ngOnInit() {
    this.listProjects()
  }

  listProjects() {
    this.projectService.getProjects().subscribe(projects => {
      this.projectData = projects;
    })
  }
}
