import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService, UserService } from '@my-company-frontend/shared';




@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    model: any = {};
    error = '';
    redirectUrl: string;

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private authenticationService: AuthenticationService,
        private userService: UserService) {
        this.redirectUrl = this.activatedRoute.snapshot.queryParams['redirectTo'];
    }

    ngOnInit(): void {
    }

    login() {
        this.userService.logout();
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(
            token => {
                if (token) {
                    this.userService.login(token);
                    this.navigateAfterSuccess();
                } else {
                    this.error = 'Username or password is incorrect';
                }
            },
            error => {
                this.error = 'Username or password is incorrect';
                console.error(error);
            }
            );
    }

    private navigateAfterSuccess() {
        if (this.redirectUrl) {
            this.router.navigateByUrl(this.redirectUrl);
        } else {
            this.router.navigate(['/']);
        }
    }
}
