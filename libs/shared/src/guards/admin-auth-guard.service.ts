import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot
} from '@angular/router';
import { UserService } from '../user.service';

@Injectable()
export class AdminAuthGuard implements CanActivate {
  constructor(private router: Router, private userService: UserService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.userService.isAdminUser()) {
      return true;
    } else {
      this.router.navigate(['login'], {
        queryParams: { redirectTo: state.url }
      });
      return false;
    }
  }
}
