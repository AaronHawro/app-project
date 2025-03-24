import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-add',
  standalone: false,
  templateUrl: './user-add.component.html',
  styleUrl: './user-add.component.scss'
})
export class UserAddComponent {
  constructor(
    private userService: UserService,
    private router: Router
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

    this.userService.getUsers().subscribe(users => {
      let valid = true;
      for (let i = 0; i < users.length; i++) {
        if(userData.username == users[i].username) {
          valid = false
        }
      }

      if(valid) {
        this.userService.createUser(userData).subscribe({
          next: () => {
            this.result = 'User added successfully';
            this.router.navigate([`/login`]);
          },
          error: () => {
            this.result = 'User could not be added (chceck email validity)';
          }
        })
      }else {
        this.result = 'This username is already taken';
      }
    })
  }
}