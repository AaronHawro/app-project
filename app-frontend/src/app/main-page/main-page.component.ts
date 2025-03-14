import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import { TeamService } from '../services/team.service';

@Component({
  selector: 'app-main-page',
  standalone: false,
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {
  constructor(
    private userService: UserService,
    private teamService: TeamService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.findUserProjects();
  }

  
  findUserProjects() {
    this.authService.currentUser.subscribe(currentUser => {
      const currentUserId = currentUser?.id;
      this.userService.getUserById(currentUserId!).subscribe(user => {
        this.teamService.getTeamById(user.team).subscribe(team => {
          console.log(team.projects);
        })
      })
    })
  }
}
