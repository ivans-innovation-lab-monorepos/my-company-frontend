import { Component, OnInit, Input } from '@angular/core';
import { BlogModel } from '@my-company-frontend/blog/src/shared/blog.model';

@Component({
  selector: 'app-main-detail-blog',
  templateUrl: './main-detail-blog.component.html',
  styleUrls: ['./main-detail-blog.component.scss']
})
export class MainDetailBlogComponent implements OnInit {
  @Input() blogPost: BlogModel;
  @Input() publishRouterLinkUrl: string;
  @Input() unpublishRouterLinkUrl: string;
  constructor() {}

  ngOnInit() {}
}
