import { DataSource } from '@angular/cdk/table';
import { Observable, Subject } from 'rxjs';
import { PageEvent } from '@angular/material';
import { PageModel } from '../page.model';
import { EventManager } from '../event-manager.service';
import { ProjectModel } from './project.model';
import { ProjectsService } from './projects.service';

export class ProjectsDataSource extends DataSource<ProjectModel> {
  page: PageModel;

  constructor(
    private projectsService: ProjectsService,
    private pageChange: Subject<PageEvent>,
    private eventManager: EventManager
  ) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<ProjectModel[]> {
    const displayDataChanges = [
      this.pageChange,
      this.eventManager.observable.filter(
        event => event.name === 'projectListModification'
      )
    ];

    const startPageEvent = new PageEvent();
    startPageEvent.pageIndex = 0;
    startPageEvent.pageSize = 5;

    /** Merging 'projectListModification' and 'page changed' streams **/
    return Observable.merge(...displayDataChanges)
      .startWith(startPageEvent)
      .switchMap(event => {
        /** Check the type of an event in the stream.
         In case of 'projectListModification' event set the page index and the page size to initial values **/
        if (event.pageIndex || event.pageSize) {
          return this.projectsService.getProjectsByParams(
            event.pageIndex + '',
            event.pageSize + ''
          );
        } else {
          return this.projectsService.getProjectsByParams(
            startPageEvent.pageIndex + '',
            startPageEvent.pageSize + ''
          );
        }
      })
      .map(data => {
        this.page = data.page;

        return data.projects;
      })
      .catch(error => {
        console.error(error);
        return Observable.of([]);
      });
  }
  disconnect() {}
}
