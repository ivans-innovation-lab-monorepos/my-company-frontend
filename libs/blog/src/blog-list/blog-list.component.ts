import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import { PageEvent } from '@angular/material';
import { Subject } from 'rxjs/Subject';
import {
  PageModel,
  EventManager,
  BlogService,
  BlogModel,
  BlogDataSource
} from '@my-company-frontend/shared';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {
  dataSource: BlogDataSource;
  pageChange: Subject<PageEvent>;

  constructor(
    private blogService: BlogService,
    private eventManager: EventManager
  ) {}

  ngOnInit(): void {
    this.pageChange = new Subject();
    this.dataSource = new BlogDataSource(
      this.blogService,
      this.pageChange,
      this.eventManager
    );
  }

  pageChanged(pageEvent: PageEvent) {
    /** Sending 'page event' to the stream */
    this.pageChange.next(pageEvent);
  }
}
