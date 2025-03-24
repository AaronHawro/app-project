import { Component } from '@angular/core';
import { TeamService } from '../../services/team.service';
import { UserService } from '../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-team-view',
  standalone: false,
  templateUrl: './team-view.component.html',
  styleUrl: './team-view.component.scss'
})
export class TeamViewComponent {
  teamData: any;
  usersData: any[] = [];

  constructor(
    private teamService: TeamService,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}


  ngOnInit() {
    this.findTeamDetails();
  }

  findTeamDetails() {
    const teamId = this.route.snapshot.params['id'];
    
    this.teamService.getTeamById(teamId).subscribe(team => {
      this.teamData = team;

      for (let i = 0; i < team.users.length; i++) {
        this.userService.getUserById(team.users[i].id).subscribe(user => {
          this.usersData.push(user);
        })
      }
    })
  }

  confirmDel() {
    if(confirm("Are you sure you want to delete this team?")) {
      this.teamService.deleteTeam(this.teamData.id).subscribe()
      this.router.navigate([`/team-list`]);
    }
  }
}
