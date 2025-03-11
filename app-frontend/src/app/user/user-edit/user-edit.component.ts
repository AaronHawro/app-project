import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-edit',
  standalone: false,
  templateUrl: './user-edit.component.html',
  styleUrl: './user-edit.component.scss'
})
export class UserEditComponent {
  constructor(
    private userService: UserService
  ) {}
  
  userId: number = 0;
  newName: string = ''; newUsername: string = ''; newPassword: string = ''; newEmail: string = ''; newRank: string = '';
  userData = { 
    name: `${this.newName}`,
    username: `${this.newUsername}`,
    password: `${this.newPassword}`,
    email: `${this.newEmail}`,
    rank: `${this.newRank}`
  }

  update() {
    console.log(this.newPassword);

    this.userService.updateUser(this.userId, this.userData).subscribe(user => {
      console.log(user);
    })
  }
}
