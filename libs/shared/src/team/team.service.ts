import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Response, RequestOptions } from '@angular/http';
import { TeamModel } from './team.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { TeamsModel } from './teams.model';

@Injectable()
export class TeamsService {
  constructor(private http: HttpClient) {}

  private extractListData(res) {
    const teams: TeamsModel = new TeamsModel();
    teams.page = res.page;
    teams.teams = res._embedded.team || {};
    return teams;
  }

  private extractSingleData(res) {
    return res || {};
  }

  public geTeams(): Observable<TeamsModel> {
    return this.http
      .get('http://localhost:8080/api/team')
      .map(this.extractListData);
  }

  public getTeamsByParams(page: string, size: string): Observable<TeamsModel> {
    return this.http
      .get('http://localhost:8080/api/team' + '?page=' + page + '&size=' + size)
      .map(this.extractListData);
  }

  public getTeam(id: string): Observable<TeamModel> {
    const url = `http://localhost:8080/api/team/${id}`;
    return this.http.get(url).map(this.extractSingleData);
  }

  public addTeam(project: TeamModel): Observable<any> {
    return this.http.post('http://localhost:8080/api/teamcommands', project);
  }
}
