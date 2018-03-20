import { Component, OnInit } from '@angular/core';
import { BlogService } from '../shared/blog.service';
import { BlogModel } from '../shared/blog.model';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent implements OnInit {
  blogPost: BlogModel;
  errorMessage: string;
  navigated = false;

  constructor(
    private blogPostsService: BlogService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      if (params['id'] !== undefined) {
        const id = params['id'];
        this.navigated = true;
        this.getBlogPost(id);
      } else {
        this.navigated = false;
        this.blogPost = new BlogModel();
      }
    });
  }

  private getBlogPost(id: string): void {
    this.blogPostsService
      .getBlogPost(id)
      .subscribe(
        blogPost => (this.blogPost = blogPost),
        error => (this.errorMessage = <any>error)
      );
  }
}
