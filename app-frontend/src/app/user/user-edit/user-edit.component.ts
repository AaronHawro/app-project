import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { VerificaitonService } from '../../services/verificaiton.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { User } from '../../../../../app-backend/src/tables/user/user.entity';

@Component({
  selector: 'app-user-edit',
  standalone: false,
  templateUrl: './user-edit.component.html',
  styleUrl: './user-edit.component.scss'
})
export class UserEditComponent {
  constructor(
    private userService: UserService,
    private verService: VerificaitonService,
    private authService: AuthService,
    private router: Router
  ) {}
  
  newName: string = ''; newUsername: string = ''; newPassword: string = ''; newEmail: string = '';
  result: string = '';

  ngOnInit() {
    this.authService.currentUser$.subscribe(user => {
      this.newName = `${user?.name}`
      this.newUsername = `${user?.username}`
      this.newPassword = `${user?.password}`
      this.newEmail = `${user?.email}`
    })
  }

  update() {
    this.authService.currentUser$.subscribe(user => {
      let taskIds: number[] = [];
      for (let i = 0; i < user?.tasks.length!; i++) {
        taskIds.push(user?.tasks[i].id!);
      }
      let commentIds: number[] = [];
      for (let i = 0; i < user?.comments.length!; i++) {
        commentIds.push(user?.comments[i].id!);
      }

      let userData = {
        name: this.newName,
        username: this.newUsername,
        password: this.newPassword,
        email: this.newEmail,
        rank: user?.rank,
        teamId: user?.team.id,
        taskIds: taskIds,
        commentIds: commentIds
      }

      this.userService.updateUser(user!.id, userData).subscribe({
        next: (updatedUser) => {
          this.result = 'User updated successfully';
          this.authService.setCurrentUser(updatedUser as User);
          this.router.navigate([`/user-view`]);
        },
        error: () => {
          this.result = 'User could not be updated'
        }
      })
    })
  }

  verifyPP() {
    this.verService.verifyManager('/project-add');
  }
}
