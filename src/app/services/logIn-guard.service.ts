import { Injectable } from '@angular/core';
import {
  CanActivate, Router,
} from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class LogInGuardService implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {

  }

  canActivate(): boolean {
    if (this.authService.isAuthenticated()) {
      return true;
    }
    this.router.navigate(['logIn']);
    return false;
  }
}
