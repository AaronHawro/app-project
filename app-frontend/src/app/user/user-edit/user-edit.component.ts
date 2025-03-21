import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { VerificaitonService } from '../../services/verificaiton.service';

@Component({
  selector: 'app-user-edit',
  standalone: false,
  templateUrl: './user-edit.component.html',
  styleUrl: './user-edit.component.scss'
})
export class UserEditComponent {
  constructor(
    private userService: UserService,
    private verService: VerificaitonService
  ) {}
  
  userId: number = 0;
  newName: string = ''; newUsername: string = ''; newPassword: string = ''; newEmail: string = '';
  
  update() {
    let userData = { 
      name:  this.newName,
      username:  this.newUsername,
      password:  this.newPassword,
      email:  this.newEmail
    }

    this.userService.updateUser(this.userId, userData).subscribe(updatedUser => {
      console.log(updatedUser);
    })
  }

  verifyPP() {
    this.verService.verifyManager('/project-add');
  }
}
