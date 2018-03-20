import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material';
import { Subject } from 'rxjs/Subject';
import {
  EventManager,
  PageModel,
  ProjectsDataSource,
  ProjectsService
} from '@my-company-frontend/shared';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent implements OnInit {
  dataSource: ProjectsDataSource;
  pageChange: Subject<PageEvent>;

  constructor(
    private projectsService: ProjectsService,
    private eventManager: EventManager
  ) {}

  ngOnInit(): void {
    this.pageChange = new Subject();
    this.dataSource = new ProjectsDataSource(
      this.projectsService,
      this.pageChange,
      this.eventManager
    );
  }

  pageChanged(pageEvent: PageEvent) {
    /** Sending 'page event' to the stream */
    this.pageChange.next(pageEvent);
  }
}
