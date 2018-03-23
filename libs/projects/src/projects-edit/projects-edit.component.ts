import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import {
  EventManager,
  ProjectModel,
  ProjectsService
} from '@my-company-frontend/shared';

@Component({
  selector: 'app-projects-edit',
  templateUrl: './projects-edit.component.html',
  styleUrls: ['./projects-edit.component.scss']
})
export class ProjectsEditComponent implements OnInit {
  form: FormGroup;
  isSaving: Boolean;
  project: ProjectModel;
  errorMessage: string;
  projectId: string;

  constructor(
    private projectsService: ProjectsService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private eventManager: EventManager
  ) {
    this.form = fb.group({
      name: ['', Validators.required],
      repoUrl: ['', Validators.required],
      siteUrl: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.route.parent.params.forEach((params: Params) => {
      if (params['id'] !== undefined) {
        this.projectId = params['id'];
        this.populateProjectForm(this.projectId);
      }
    });
  }

  private populateProjectForm(id: string): void {
    this.projectsService.getProject(id).subscribe(project => {
      this.form.reset({
        name: project.name,
        repoUrl: project.repoUrl,
        siteUrl: project.siteUrl,
        description: project.description
      });
    }, error => (this.errorMessage = <any>error));
  }

  onSubmit({ value, valid }: { value: ProjectModel; valid: boolean }) {
    this.projectsService
      .updateProject(this.projectId, value)
      .subscribe(
        response => this.onSaveSuccess(response),
        () => this.onSaveError()
      );
  }

  private onSaveSuccess(result) {
    this.eventManager.broadcast({
      name: 'projectListModification',
      content: 'OK'
    });
    this.isSaving = false;
  }

  private onSaveError() {
    this.isSaving = false;
  }
}
