import { Component } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login-page',
  standalone: false,
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
  constructor(
    private userService: UserService
  ) {}

  // basically linked with [(ngModule)] and recieves data from the html element its linked with
  username: string = ''; password: string = ''; 
  tryLogIn() {
    this.userService.getUserByUsername(this.username).subscribe(user => {
      if(user == null) {
        console.log("user not found");
      }else if(this.password != user.password) {
        console.log("incorrect password");
      }else {
        console.log("logged in as: ", user);
      }
    })
  }
}
