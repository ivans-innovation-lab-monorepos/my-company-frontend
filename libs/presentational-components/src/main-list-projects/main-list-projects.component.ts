import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PageEvent } from '@angular/material';
import { ProjectsDataSource } from '@my-company-frontend/shared';

@Component({
  selector: 'app-main-list-projects',
  templateUrl: './main-list-projects.component.html',
  styleUrls: ['./main-list-projects.component.scss']
})
export class MainListProjectsComponent implements OnInit {
  @Input() dataSource: ProjectsDataSource;
  @Input() displayedColumns;
  @Output()
  paginatorPageEvent: EventEmitter<PageEvent> = new EventEmitter<PageEvent>();
  constructor() {}
  ngOnInit() {}

  pageChanged(event: PageEvent) {
    this.paginatorPageEvent.emit(event);
  }
}
