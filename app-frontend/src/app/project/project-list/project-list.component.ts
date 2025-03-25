import { Component } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { VerificaitonService } from '../../services/verificaiton.service';

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
    private verService: VerificaitonService
  ) {}

  ngOnInit() {
    this.listProjects();
  }

  listProjects() {
    this.projectService.getProjects().subscribe(projects => {
      this.projectData = projects;
    })
  }

  checkPermissions() {
    this.verService.verifyManager('/project-add');
  }
}
