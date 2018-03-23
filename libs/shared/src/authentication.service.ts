import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { TOKEN_AUTH_PASSWORD, TOKEN_AUTH_USERNAME } from './auth.constant';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthenticationService {
  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    const body = `username=${encodeURIComponent(
      username
    )}&password=${encodeURIComponent(password)}&grant_type=password`;

    let headers = new HttpHeaders();
    headers = headers
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .set(
        'Authorization',
        'Basic ' + btoa(TOKEN_AUTH_USERNAME + ':' + TOKEN_AUTH_PASSWORD)
      );

    return this.http
      .post('http://localhost:8080/oauth/token', body, { headers })
      .map((res: any) => {
        if (res.access_token) {
          return res.access_token;
        }
        return null;
      });
  }
}
