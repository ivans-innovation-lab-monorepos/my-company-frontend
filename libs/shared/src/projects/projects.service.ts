import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { ProjectModel } from './project.model';
import { ProjectsModel } from './projects.model';

@Injectable()
export class ProjectsService {
  constructor(private http: HttpClient) {}

  private extractListData(res) {
    const projects: ProjectsModel = new ProjectsModel();
    projects.page = res.page;
    projects.projects = res._embedded.projects || {};
    return projects;
  }

  private extractSingleData(res) {
    return res || {};
  }

  public getProjects(): Observable<ProjectsModel> {
    return this.http
      .get('http://localhost:8080/api/projects')
      .map(this.extractListData);
  }

  public getProjectsByParams(
    page: string,
    size: string
  ): Observable<ProjectsModel> {
    return this.http
      .get(
        'http://localhost:8080/api/projects' + '?page=' + page + '&size=' + size
      )
      .map(this.extractListData);
  }

  public getProject(id: string): Observable<ProjectModel> {
    const url = `http://localhost:8080/api/projects/${id}`;
    return this.http.get(url).map(this.extractSingleData);
  }

  public addProject(project: ProjectModel): Observable<any> {
    return this.http.post('http://localhost:8080/api/projectcommands', project);
  }

  public updateProject(
    projectId: string,
    project: ProjectModel
  ): Observable<any> {
    const url = `http://localhost:8080/api/projectcommands/${projectId}/updatecommand`;
    return this.http.post(url, project);
  }

  public activateProject(projectId: string): Observable<any> {
    const project: ProjectModel = new ProjectModel();
    const url = `http://localhost:8080/api/projectcommands/${projectId}/activatecommand`;
    return this.http.post(url, project);
  }

  public deactivateProject(projectId: string): Observable<any> {
    const project: ProjectModel = new ProjectModel();
    const url = `http://localhost:8080/api/projectcommands/${projectId}/deactivatecommand`;
    return this.http.post(url, project);
  }
}
