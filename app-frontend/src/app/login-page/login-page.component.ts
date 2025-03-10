import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { strict } from 'assert';

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

  ngOnInit() {
    
  }
  
  usernameInput: string = '';
  tryLogIn() {
    console.log(this.usernameInput);

    this.userService.getUserByUsername(this.usernameInput).subscribe(user => {
      console.log(user);
    })
  }
}
