import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { PageEvent } from '@angular/material';
import {
  PageModel,
  EventManager,
  UsersDataSource,
  UsersService
} from '@my-company-frontend/shared';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  dataSource: UsersDataSource;
  pageChange: Subject<PageEvent>;

  constructor(
    private usersService: UsersService,
    private eventManager: EventManager
  ) {}

  ngOnInit(): void {
    this.pageChange = new Subject();
    this.dataSource = new UsersDataSource(
      this.usersService,
      this.pageChange,
      this.eventManager
    );
  }

  pageChanged(pageEvent: PageEvent) {
    /** Sending 'page event' to the stream */
    this.pageChange.next(pageEvent);
  }
}
