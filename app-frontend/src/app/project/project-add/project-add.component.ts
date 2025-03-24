import { Component } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { TeamService } from '../../services/team.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-add',
  standalone: false,
  templateUrl: './project-add.component.html',
  styleUrl: './project-add.component.scss'
})
export class ProjectAddComponent {
  teamData: any;

  constructor(
    private projectService: ProjectService,
    private teamService: TeamService,
    private router: Router
  ) {}
  
  addName: string; addDeadline: string; addTeam: number;
  result: string;

  ngOnInit() {
    this.teamService.getTeams().subscribe(teams =>
      this.teamData = teams
    )
  }

  addProject() {
    let projectData = { 
      name: this.addName,
      deadline: this.addDeadline,
      taskIds: [],
      teamIds: [this.addTeam]
    }

    this.projectService.createProject(projectData).subscribe({
      next: (project: any) => {
        this.result = 'project added successfully';

        this.projectService.updateProject(project.id, projectData).subscribe();

        this.router.navigate([`/project-view/${project.id}`]);
      },
      error: () => {
        this.result = 'project could not be added';
      }
    })
  }
}
