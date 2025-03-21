import { Component } from '@angular/core';
import { VerificaitonService } from '../../services/verificaiton.service';

@Component({
  selector: 'app-project-add',
  standalone: false,
  templateUrl: './project-add.component.html',
  styleUrl: './project-add.component.scss'
})
export class ProjectAddComponent {

  constructor(
    private verService: VerificaitonService
  ) {}


  verifyPP() {
    this.verService.verifyManager('/project-add');
  }
}
