import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import { TeamService } from '../services/team.service';
import { ProjectService } from '../services/project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  standalone: false,
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

  userData: any;
  teamData: any;
  projectsData: any[] = [];

  constructor(
    private userService: UserService,
    private teamService: TeamService,
    private projectService: ProjectService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    console.log('MainPage initialized');
    
    this.findUserProjects();
  }

  ngOnDestroy() {
    console.log('MainPage destroyed');
    // Remove any global listeners if added
  }

  
  findUserProjects() {
    console.log('finduserprojecs');

    this.authService.currentUser$.subscribe(currentUser => {
      const currentUserId = currentUser?.id;

      this.userService.getUserById(currentUserId!).subscribe(user => {
        this.userData = user;

        this.teamService.getTeamById(user.team.id).subscribe(team => {
          this.teamData = team;

          for (let i = 0; i < team.projects.length; i++) {
            this.projectService.getProjectById(team.projects[i].id).subscribe(project => {
              this.projectsData.push(project);
            })
          }
        })
      })
    })
  }

  verifyUser() {
    console.log('veridklasluser');

    this.authService.currentUser$.subscribe(currentUser => {
      console.log(currentUser!.rank)
      if(currentUser!.rank == 'programmer') {
        alert("You dont have the right permissions to do that");
      }else {
        this.router.navigate(['/project-add']);
      }
    })
  }
}
