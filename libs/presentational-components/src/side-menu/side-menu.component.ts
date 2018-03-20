import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '@my-company-frontend/shared';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  @Input() nav;
  @Input() authenticated;
  constructor(private router: Router, private userService: UserService) {}

  logout() {
    this.userService.logout();
    this.router.navigate(['/']);
  }

  ngOnInit() {}
}
