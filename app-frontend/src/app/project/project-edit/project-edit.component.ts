import { Component } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { TeamService } from '../../services/team.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-project-edit',
  standalone: false,
  templateUrl: './project-edit.component.html',
  styleUrl: './project-edit.component.scss'
})
export class ProjectEditComponent {
  teamData: any;

  constructor(
    private projectService: ProjectService,
    private teamService: TeamService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  
  editName: string; editDeadline: string; editTeam: number
  teamIds: number[] = [];
  addedTeams: any[] = [];result: string;

  ngOnInit() {
    const projectId = this.route.snapshot.params['id'];
    this.projectService.getProjectById(projectId).subscribe(project => {
      this.editName = project.name;
      this.editDeadline = new Date(project.deadline).toISOString().substring(0, 10);
    })
    
    this.teamService.getTeams().subscribe(teams =>
      this.teamData = teams
    )
  }

  saveTeam() {
    this.teamService.getTeamById(this.editTeam).subscribe(team => {
      this.addedTeams.push(team);
      this.teamIds.push(team.id);
    })
  }
  clearTeams() {
    this.addedTeams = [];
  }

  editProject() {
    const projectId = this.route.snapshot.params['id'];

    let projectTasks: number[] = [];
    this.projectService.getProjectById(projectId).subscribe(project => {
      for (let i = 0; i < project.tasks.length; i++) {
        projectTasks.push(project.tasks[i].id)
      }
    })

    let projectData = { 
      name: this.editName,
      deadline: this.editDeadline,
      taskIds: projectTasks,
      teamIds: [this.editTeam]
    }

    this.projectService.updateProject(projectId, projectData).subscribe({
      next: (project: any) => {
        this.result = 'project updated successfully';

        this.router.navigate([`/project-view/${project.id}`]);
      },
      error: () => {
        this.result = 'project could not be updated';
      }
    })
  }
}
