import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { TeamService } from '../../services/team.service';

@Component({
  selector: 'app-user-view',
  standalone: false,
  templateUrl: './user-view.component.html',
  styleUrl: './user-view.component.scss'
})
export class UserViewComponent {
  userData: any;
  teamData: any;

  constructor(
    private authService: AuthService,
    private teamService: TeamService
  ) {}

  ngOnInit() {
    this.authService.currentUser$.subscribe(user => {
      this.userData = user;
    })

    this.teamService.getTeamById(this.userData.team.id).subscribe(team => {
      this.teamData = team;
    })
  }
}
