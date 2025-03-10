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

  ngOnInit() {
    
  }
  
  tryLogIn() {
    let username = document.getElementById('username');
    console.log(this.userService.getUserByName(username?.textContent!));
  }
}
