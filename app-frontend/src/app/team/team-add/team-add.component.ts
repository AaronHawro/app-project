import { Component } from '@angular/core';
import { TeamService } from '../../services/team.service';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-team-add',
  standalone: false,
  templateUrl: './team-add.component.html',
  styleUrl: './team-add.component.scss'
})
export class TeamAddComponent {
  usersData: any[] = [];
  
  constructor(
    private teamService: TeamService,
    private userService: UserService,
    private router: Router
  ) {}
  
  addName: string; addUser: number;
  userIds: number[] = [];
  addedUsers: string; result: string;

  ngOnInit() {
    this.userService.getUsers().subscribe(users => {
      for (let i = 0; i < users.length; i++) {
        this.userService.getUserById(users[i].id).subscribe(user => {
          this.usersData.push(user);
        })
      }
    })
  }

  saveUser() {
    this.userService.getUserById(this.addUser).subscribe(user => {
      this.addedUsers += `${user.name}, `;
      this.userIds.push(user.id);
    })
  }

  addTeam() {
    let teamData = { 
      name: this.addName,
      userIds: this.userIds,
      projectIds: []
    }

    this.teamService.createTeam(teamData).subscribe({
      next: (team: any) => {
        this.result = 'Team added successfully';

        this.teamService.updateTeam(team.id, teamData).subscribe();

        this.router.navigate([`/team-view/${team.id}`]);
      },
      error: () => {
        this.result = 'Team could not be added';
      }
    })
  }
}
