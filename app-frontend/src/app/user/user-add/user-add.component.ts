import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { VerificaitonService } from '../../services/verificaiton.service';

@Component({
  selector: 'app-user-add',
  standalone: false,
  templateUrl: './user-add.component.html',
  styleUrl: './user-add.component.scss'
})
export class UserAddComponent {
  constructor(
    private userService: UserService,
    private verService: VerificaitonService
  ) {}
  
  addName: string = ''; addUsername: string = ''; addPassword: string = ''; addEmail: string = ''; addRank: string = '';
  result: string = '';

  addUser() {
    let userData = { 
      name:  this.addName,
      username:  this.addUsername,
      password:  this.addPassword,
      email:  this.addEmail,
      rank: this.addRank
    }

    this.userService.createUser(userData).subscribe
    this.userService.getUserByUsername(this.addUsername).subscribe(user => {
      user ? this.result =  'user added successfully' : this.result =  'user could not be added (chceck email validity)';
    })
  }

  verifyPP() {
    this.verService.verifyManager('/project-add');
  }
}