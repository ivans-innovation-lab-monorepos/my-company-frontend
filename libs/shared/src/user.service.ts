import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { TOKEN_NAME } from './auth.constant';

@Injectable()
export class UserService {
  constructor(private jwtHelper: JwtHelperService) {}

  public login(accessToken: string) {
    localStorage.setItem(TOKEN_NAME, accessToken);
  }

  public logout() {
    localStorage.removeItem(TOKEN_NAME);
  }

  public isAdminUser(): boolean {
    if (localStorage.getItem(TOKEN_NAME)) {
      const decodedToken = this.jwtHelper.decodeToken(
        localStorage.getItem(TOKEN_NAME)
      );
      return (
        decodedToken.authorities &&
        decodedToken.authorities.some(el => el === 'ADMIN_USER')
      );
    } else {
      return false;
    }
  }

  public isUser(): boolean {
    return localStorage.getItem(TOKEN_NAME) && !this.isAdminUser();
  }

  public isAuthenticated(): boolean {
    return localStorage.getItem(TOKEN_NAME) && true;
  }

  public isTokenExpired(): boolean {
    return (
      localStorage.getItem(TOKEN_NAME) == null ||
      this.jwtHelper.isTokenExpired(localStorage.getItem(TOKEN_NAME))
    );
  }
}
