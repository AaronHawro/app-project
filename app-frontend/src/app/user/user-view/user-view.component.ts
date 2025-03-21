import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { TeamService } from '../../services/team.service';
import { Router } from '@angular/router';
import { VerificaitonService } from '../../services/verificaiton.service';

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
    private teamService: TeamService,
    private verService: VerificaitonService,
    private router: Router
  ) {}

  ngOnInit() {
    this.authService.currentUser$.subscribe(user => {
      this.userData = user;
    })

    this.teamService.getTeamById(this.userData.team.id).subscribe(team => {
      this.teamData = team;
    })
  }

  confirmDel() {

  }

  verifyPP() {
    this.verService.verifyManager('/project-add');
  }
}
