import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { UserModel } from './user.model';
import { UsersModel } from './users.model';
import { RolesModel } from './roles.model';
import 'rxjs/add/operator/map';

@Injectable()
export class UsersService {
  constructor(private http: HttpClient) {}

  private extractListData(res) {
    const users: UsersModel = new UsersModel();
    users.page = res.page;
    users.users = res._embedded.users || {};
    return users;
  }

  private extractRolesListData(res) {
    const roles: RolesModel = new RolesModel();
    roles.page = res.page;
    roles.roles = res._embedded.roles || {};
    return roles;
  }

  private extractSingleData(res) {
    return res || {};
  }

  public getUsers(): Observable<UsersModel> {
    return this.http
      .get('http://localhost:8080/api/users')
      .map(this.extractListData);
  }

  public getUsersByParams(page: string, size: string): Observable<UsersModel> {
    return this.http
      .get(
        'http://localhost:8080/api/users' + '?page=' + page + '&size=' + size
      )
      .map(this.extractListData);
  }

  public getUser(id: string): Observable<UserModel> {
    const url = `http://localhost:8080/api/users/${id}`;
    return this.http.get(url).map(this.extractSingleData);
  }

  public addUser(user: UserModel): Observable<any> {
    return this.http.post('http://localhost:8080/api/users', user);
  }

  public updateUser(userId: string, user: UserModel): Observable<any> {
    const url = `http://localhost:8080/api/users/${userId}`;
    return this.http.put(url, user);
  }

  public getAllRoles(): Observable<RolesModel> {
    return this.http
      .get('http://localhost:8080/api/users')
      .map(this.extractRolesListData);
  }

  public getAllRolesOfUser(userId: string): Observable<RolesModel> {
    const url = `http://localhost:8080/api/users/${userId}/roles`;
    return this.http.get(url).map(this.extractRolesListData);
  }
}
