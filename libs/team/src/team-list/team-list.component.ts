import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { PageEvent } from '@angular/material';
import {
  PageModel,
  EventManager,
  TeamsDataSource,
  TeamsService
} from '@my-company-frontend/shared';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss']
})
export class TeamListComponent implements OnInit {
  dataSource: TeamsDataSource;
  pageChange: Subject<PageEvent>;

  constructor(
    private teamsService: TeamsService,
    private eventManager: EventManager
  ) {}

  ngOnInit(): void {
    this.pageChange = new Subject();
    this.dataSource = new TeamsDataSource(
      this.teamsService,
      this.pageChange,
      this.eventManager
    );
  }

  pageChanged(pageEvent: PageEvent) {
    /** Sending 'page event' to the stream */
    this.pageChange.next(pageEvent);
  }
}
