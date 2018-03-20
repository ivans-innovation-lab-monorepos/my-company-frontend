import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PageEvent } from '@angular/material';
import { UsersDataSource } from '@my-company-frontend/shared';

@Component({
  selector: 'app-main-list-users',
  templateUrl: './main-list-users.component.html',
  styleUrls: ['./main-list-users.component.scss']
})
export class MainListUsersComponent implements OnInit {
  @Input() dataSource: UsersDataSource;
  @Input() displayedColumns;
  @Output()
  paginatorPageEvent: EventEmitter<PageEvent> = new EventEmitter<PageEvent>();
  constructor() {}
  ngOnInit() {}

  pageChanged(event: PageEvent) {
    this.paginatorPageEvent.emit(event);
  }
}
