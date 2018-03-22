import { DataSource } from '@angular/cdk/table';
import { Observable, Subject } from 'rxjs';
import { PageEvent } from '@angular/material';
import { PageModel } from '../page.model';
import { EventManager } from '../event-manager.service';
import { BlogModel } from './blog.model';
import { BlogService } from './blog.service';

export class BlogDataSource extends DataSource<BlogModel> {
  page: PageModel;

  constructor(
    private blogService: BlogService,
    private pageChange: Subject<PageEvent>,
    private eventManager: EventManager
  ) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<BlogModel[]> {
    const displayDataChanges = [
      this.pageChange,
      this.eventManager.observable.filter(
        event => event.name === 'blogPostListModification'
      )
    ];

    const startPageEvent = new PageEvent();
    startPageEvent.pageIndex = 0;
    startPageEvent.pageSize = 5;

    /** Merging 'blogPostListModification' and 'page changed' streams **/
    return Observable.merge(...displayDataChanges)
      .startWith(startPageEvent)
      .switchMap(event => {
        /** Check the type of an event in the stream.
         In case of 'blogPostListModification' event set the page index and the page size to initial values **/
        if (event.pageIndex || event.pageSize) {
          return this.blogService.getBlogPostsByParams(
            event.pageIndex + '',
            event.pageSize + ''
          );
        } else {
          return this.blogService.getBlogPostsByParams(
            startPageEvent.pageIndex + '',
            startPageEvent.pageSize + ''
          );
        }
      })
      .map(data => {
        this.page = data.page;

        return data.blogposts;
      })
      .catch(error => {
        console.error(error);
        return Observable.of([]);
      });
  }
  disconnect() {}
}
