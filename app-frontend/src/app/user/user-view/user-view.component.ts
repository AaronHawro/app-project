import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-view',
  standalone: false,
  templateUrl: './user-view.component.html',
  styleUrl: './user-view.component.scss'
})
export class UserViewComponent {
  userData: any;
  teamData: any;

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.authService.currentUser$.subscribe(user => {
      this.userData = user;
    })
  }

  confirmDel() {
    if(confirm("Are you sure you want to delete this profile?")) {
      this.userService.deleteUser(this.userData.id).subscribe()
      this.router.navigate([`/login`]);
    }
  }
}
