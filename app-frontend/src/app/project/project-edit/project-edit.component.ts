import { Component } from '@angular/core';
import { VerificaitonService } from '../../services/verificaiton.service';

@Component({
  selector: 'app-project-edit',
  standalone: false,
  templateUrl: './project-edit.component.html',
  styleUrl: './project-edit.component.scss'
})
export class ProjectEditComponent {

constructor(
  private verService: VerificaitonService
) {}


  verifyPP() {
    this.verService.verifyManager('/project-add');
  }
}
