import { DataSource } from '@angular/cdk/table';
import { Observable, Subject } from 'rxjs';
import { PageEvent } from '@angular/material';
import { PageModel } from '../page.model';
import { EventManager } from '../event-manager.service';
import { UserModel } from './user.model';
import { UsersService } from './users.service';

export class UsersDataSource extends DataSource<UserModel> {
  page: PageModel;

  constructor(
    private usersService: UsersService,
    private pageChange: Subject<PageEvent>,
    private eventManager: EventManager
  ) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<UserModel[]> {
    const displayDataChanges = [
      this.pageChange,
      this.eventManager.observable.filter(
        event => event.name === 'userListModification'
      )
    ];

    const startPageEvent = new PageEvent();
    startPageEvent.pageIndex = 0;
    startPageEvent.pageSize = 5;

    /** Merging 'userListModification' and 'page changed' streams **/
    return Observable.merge(...displayDataChanges)
      .startWith(startPageEvent)
      .switchMap(event => {
        /** Check the type of an event in the stream.
         In case of 'userListModification' event set the page index and the page size to initial values **/
        if (event.pageIndex || event.pageSize) {
          return this.usersService.getUsersByParams(
            event.pageIndex + '',
            event.pageSize + ''
          );
        } else {
          return this.usersService.getUsersByParams(
            startPageEvent.pageIndex + '',
            startPageEvent.pageSize + ''
          );
        }
      })
      .map(data => {
        this.page = data.page;

        return data.users;
      })
      .catch(error => {
        console.error(error);
        return Observable.of([]);
      });
  }
  disconnect() {}
}
