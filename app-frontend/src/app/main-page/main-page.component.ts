import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import { TeamService } from '../services/team.service';
import { ProjectService } from '../services/project.service';

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
    private projectService: ProjectService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.findUserProjects();
  }

  
  findUserProjects() {
    this.authService.currentUser$.subscribe(currentUser => {
      const currentUserId = currentUser?.id;

      this.userService.getUserById(currentUserId!).subscribe(user => {
        console.log(user);


        this.teamService.getTeamById(user.team.id).subscribe(team => {
          console.log(team);

          for (let i = 0; i < team.projects.length; i++) {
            this.projectService.getProjectById(team.projects[i].id).subscribe(project => {
              console.log(project);
            })
          }

        })
      })
    })
  }
}
