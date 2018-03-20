import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {
  FormGroup,
  Validators,
  FormBuilder,
  FormControl
} from '@angular/forms';
import { EventManager, BlogService, BlogModel } from '@my-company-frontend/shared';

@Component({
  selector: 'app-blog-publish',
  templateUrl: './blog-publish.component.html',
  styleUrls: ['./blog-publish.component.scss']
})
export class BlogPublishComponent implements OnInit {
  form: FormGroup;
  isSaving: Boolean;
  blogId: string;
  error: any;

  constructor(
    private blogPostsService: BlogService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private eventManager: EventManager
  ) {
    this.form = fb.group({
      publishAt: new FormControl(new Date(), Validators.required)
    });
  }

  ngOnInit() {
    this.route.parent.params.forEach((params: Params) => {
      if (params['id'] !== undefined) {
        this.blogId = params['id'];
      }
    });
  }
  onSubmit({ value, valid }: { value: BlogModel; valid: boolean }) {
    this.blogPostsService
      .publishBlogPost(this.blogId, value.publishAt)
      .subscribe(
        response => this.onSaveSuccess(response),
        err => this.onSaveError(err)
      );
  }

  private onSaveSuccess(result) {
    this.eventManager.broadcast({
      name: 'blogPostListModification',
      content: 'OK'
    });
    this.isSaving = false;
    this.error = null;
  }

  private onSaveError(err: HttpErrorResponse) {
    console.log(err);
    this.isSaving = false;
    this.error = err;
  }
}
