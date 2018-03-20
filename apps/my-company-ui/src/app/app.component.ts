import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '@my-company-frontend/shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = "Ivan's innovation lab";

  constructor(private router: Router, private userService: UserService) {}

  logout() {
    this.userService.logout();
    this.router.navigate(['/']);
  }

  get isAdminUser() {
    return this.userService.isAdminUser();
  }

  get isUser() {
    return this.userService.isUser();
  }

  get isAuthenticated() {
    return this.userService.isAuthenticated();
  }
}
