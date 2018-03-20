import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PageEvent } from '@angular/material';
import { ProjectsDataSource } from '@my-company-frontend/shared';

@Component({
  selector: 'app-main-list-team',
  templateUrl: './main-list-team.component.html',
  styleUrls: ['./main-list-team.component.scss']
})
export class MainListTeamComponent implements OnInit {
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
