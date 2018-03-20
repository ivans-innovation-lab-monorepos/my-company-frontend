import { HttpClient, HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatCommonModule,
  MatDatepickerModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatNativeDateModule,
  MatOptionModule,
  MatPaginatorModule,
  MatRadioModule,
  MatSelectModule,
  MatSidenavModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule
} from '@angular/material';

import { ProjectsDetailComponent } from './projects-detail.component';
import { RouterTestingModule } from '@angular/router/testing';
import {
  EventManager,
  UserService,
  AuthenticationService,
  AuthGuard,
  AdminAuthGuard,
  ProjectsService
} from '@my-company-frontend/shared';
import { PresentationalComponentsModule } from '@my-company-frontend/presentational-components';

describe('ProjectsDetailComponent', () => {
  let component: ProjectsDetailComponent;
  let fixture: ComponentFixture<ProjectsDetailComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [ProjectsDetailComponent],
        providers: [
          ProjectsService,
          EventManager,
          HttpClient,
          UserService,
          AuthenticationService,
          AuthGuard,
          AdminAuthGuard
        ],
        imports: [
          RouterTestingModule,
          HttpClientModule,
          PresentationalComponentsModule,
          MatCardModule,
          MatButtonModule,
          MatCommonModule,
          MatDatepickerModule,
          MatInputModule,
          MatCheckboxModule,
          MatRadioModule,
          MatSidenavModule,
          MatListModule,
          MatIconModule,
          MatToolbarModule,
          MatTabsModule,
          MatPaginatorModule,
          MatTableModule,
          MatOptionModule,
          MatSelectModule,
          MatNativeDateModule
        ]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
