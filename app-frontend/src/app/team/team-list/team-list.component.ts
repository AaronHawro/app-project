import { Component } from '@angular/core';
import { TeamService } from '../../services/team.service';

@Component({
  selector: 'app-team-list',
  standalone: false,
  templateUrl: './team-list.component.html',
  styleUrl: './team-list.component.scss'
})
export class TeamListComponent {
    teamData: any;
    userData: any[] = [];
  
    constructor(
      private teamService: TeamService,
    ) {}
  
    ngOnInit() {
      this.listTeams()
    }
  
    listTeams() {
      this.teamService.getTeams().subscribe(teams => {
        this.teamData = teams;
      })
    }
}
