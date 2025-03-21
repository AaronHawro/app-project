import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class VerificaitonService {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  verifyManager(route: string) {
    this.authService.currentUser$.subscribe(currentUser => {
      if(currentUser!.rank == 'programmer') {
        alert("You dont have the right permissions");
      }else {
        this.router.navigate([`${route}`]);
      }
    })
  }
  
  verifyAdmin(route: string) {
    this.authService.currentUser$.subscribe(currentUser => {
      if(currentUser!.rank != 'admin') {
        alert("You dont have the right permissions");
      }else {
        this.router.navigate([`${route}`]);
      }
    })
  }
}
