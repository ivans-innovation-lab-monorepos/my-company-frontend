import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PageEvent } from '@angular/material';
import { BlogDataSource } from '@my-company-frontend/shared';

@Component({
  selector: 'app-main-list-blog',
  templateUrl: './main-list-blog.component.html',
  styleUrls: ['./main-list-blog.component.scss']
})
export class MainListBlogComponent implements OnInit {
  @Input() dataSource: BlogDataSource;
  @Input() displayedColumns;
  @Output()
  paginatorPageEvent: EventEmitter<PageEvent> = new EventEmitter<PageEvent>();
  constructor() {}

  ngOnInit() {}

  pageChanged(event: PageEvent) {
    this.paginatorPageEvent.emit(event);
  }
}
