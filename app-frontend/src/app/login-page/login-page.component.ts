import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: false,
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
  constructor(
    private userService: UserService,
    private authService: AuthService,
    private router: Router
  ) {}

  username: string = ''; password: string = ''; 
  tryLogIn() {
    console.log('trylogin');

    this.userService.getUserByUsername(this.username).subscribe(user => {
      if(user == null) {
        console.log("user not found");
      }else if(this.password != user.password) {
        console.log("incorrect password");
      }else {
        this.authService.setCurrentUser(user);
        this.router.navigate(['']);
      }
    })
  }
}
