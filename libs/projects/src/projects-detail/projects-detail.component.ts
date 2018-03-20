import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/filter';
import { ProjectModel, ProjectsService } from '@my-company-frontend/shared';

@Component({
  selector: 'app-projects-detail',
  templateUrl: './projects-detail.component.html',
  styleUrls: ['./projects-detail.component.scss']
})
export class ProjectsDetailComponent implements OnInit {
  project: ProjectModel;
  errorMessage: string;
  navigated = false;

  constructor(
    private projectsService: ProjectsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      if (params['id'] !== undefined) {
        const id = params['id'];
        this.navigated = true;
        this.getProject(id);
      } else {
        this.navigated = false;
        this.project = new ProjectModel();
      }
    });
  }

  private getProject(id: string): void {
    this.projectsService
      .getProject(id)
      .subscribe(
        project => (this.project = project),
        error => (this.errorMessage = <any>error)
      );
  }
}
