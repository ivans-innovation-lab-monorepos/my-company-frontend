import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import {
  EventManager,
  ProjectsService,
  ProjectModel
} from '@my-company-frontend/shared';

@Component({
  selector: 'app-projects-new',
  templateUrl: './projects-new.component.html',
  styleUrls: ['./projects-new.component.scss']
})
export class ProjectsNewComponent implements OnInit {
  form: FormGroup;
  isSaving: Boolean;

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
      description: ['', Validators.required],
      category: ['', Validators.required]
    });
  }

  ngOnInit() {}

  onSubmit({ value, valid }: { value: ProjectModel; valid: boolean }) {
    this.projectsService
      .addProject(value)
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
