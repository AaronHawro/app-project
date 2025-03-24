import { Component } from '@angular/core';
import { TeamService } from '../../services/team.service';
import { UserService } from '../../services/user.service';
import { ProjectService } from '../../services/project.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-team-edit',
  standalone: false,
  templateUrl: './team-edit.component.html',
  styleUrl: './team-edit.component.scss'
})
export class TeamEditComponent {
  teamData: any;
  usersData: any[] = [];
  
  constructor(
    private teamService: TeamService,
    private userService: UserService,
    private projectService: ProjectService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  
  editName: string; editUser: number;  editProject: number;
  userIds: number[] = []; projectIds: number[] = [];
  addedUsers: any[] = []; addedProjects: string; result: string;

  ngOnInit() {
    const teamId = this.route.snapshot.params['id'];
    this.teamService.getTeamById(teamId).subscribe(team => {
      this.teamData = team;

      this.editName = team.name;
      for(let i = 0; i < team.users.length; i++) {
        this.addedUsers.push(team.users[i]);
      }
      for(let i = 0; i < team.projects.length; i++) {
        this.addedProjects += `${team.projects[i].name}, `;
      }
    })

    this.userService.getUsers().subscribe(users => {
      for (let i = 0; i < users.length; i++) {
        this.userService.getUserById(users[i].id).subscribe(user => {
          this.usersData.push(user);
        })
      }
    })
  }

  saveUser() {
    this.userService.getUserById(this.editUser).subscribe(user => {
      this.addedUsers.push(user)
      this.userIds.push(user.id);
    })
  }

  saveProject() {
    this.projectService.getProjectById(this.editProject).subscribe(project => {
      this.addedProjects += `${project.name}, `;
      this.projectIds.push(project.id);
    })
  }

  update() {
    let teamData = { 
      name: this.editName,
      userIds: this.userIds,
      projectIds: this.projectIds
    }

    this.teamService.updateTeam(this.teamData.id, teamData).subscribe({
      next: (team: any) => {
        this.result = 'Team saved successfully';

        this.router.navigate([`/team-view/${team.id}`]);
      },
      error: () => {
        this.result = 'Team could not be saved';
      }
    })
  }
}
