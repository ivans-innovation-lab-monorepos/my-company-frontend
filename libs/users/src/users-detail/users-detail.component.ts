import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserModel, UsersService } from '@my-company-frontend/shared';

@Component({
  selector: 'app-users-detail',
  templateUrl: './users-detail.component.html',
  styleUrls: ['./users-detail.component.scss']
})
export class UsersDetailComponent implements OnInit {
  user: UserModel;
  errorMessage: string;
  navigated = false;

  constructor(
    private usersService: UsersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      if (params['id'] !== undefined) {
        const id = params['id'];
        this.navigated = true;
        this.getUser(id);
      } else {
        this.navigated = false;
        this.user = new UserModel();
      }
    });
  }

  private getUser(id: string): void {
    this.usersService.getUser(id).subscribe(user => {
      this.user = user;
      this.usersService
        .getAllRolesOfUser(id)
        .subscribe(
          role => (this.user.roles = role.roles),
          error => (this.errorMessage = <any>error)
        );
    }, error => (this.errorMessage = <any>error));
  }
}
