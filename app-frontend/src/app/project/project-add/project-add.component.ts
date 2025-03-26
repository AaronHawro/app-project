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
  teamIds: number[] = [];
  addedTeams: any[] = []; result: string;

  ngOnInit() {
    this.teamService.getTeams().subscribe(teams =>
      this.teamData = teams
    )
  }

  saveTeam() {
    this.teamService.getTeamById(this.addTeam).subscribe(team => {
      this.addedTeams.push(team);
      this.teamIds.push(team.id);
    })
  }
  clearTeams() {
    this.addedTeams = [];
  }

  addProject() {
    let projectData = { 
      name: this.addName,
      deadline: this.addDeadline,
      taskIds: [],
      teamIds: this.teamIds
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
