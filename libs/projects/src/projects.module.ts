import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material';
import { ProjectsActivateComponent } from './projects-activate/projects-activate.component';
import { ProjectsDeactivateComponent } from './projects-deactivate/projects-deactivate.component';
import { ProjectsComponent } from './projects.component';
import { ProjectsNewComponent } from './projects-new/projects-new.component';
import { ProjectsEditComponent } from './projects-edit/projects-edit.component';
import { ProjectsDetailComponent } from './projects-detail/projects-detail.component';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PresentationalComponentsModule } from '@my-company-frontend/presentational-components';
import { Routes, RouterModule } from '@angular/router';
import {
  AuthGuard,
  AdminAuthGuard,
  ProjectsService
} from '@my-company-frontend/shared';

export const projectRoutes: Routes = [
  {
    path: '',
    component: ProjectsComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: ProjectsListComponent,
        canActivate: [AuthGuard],
        children: [
          {
            path: ':id',
            component: ProjectsDetailComponent,
            data: {
              breadcrumb: 'detail'
            },
            canActivate: [AuthGuard],
            children: [
              {
                path: 'action/edit',
                component: ProjectsEditComponent,
                data: {
                  breadcrumb: 'edit'
                },
                canActivate: [AuthGuard, AdminAuthGuard]
              },
              {
                path: 'action/activate',
                component: ProjectsActivateComponent,
                data: {
                  breadcrumb: 'activate'
                },
                canActivate: [AuthGuard, AdminAuthGuard]
              },
              {
                path: 'action/deactivate',
                component: ProjectsDeactivateComponent,
                data: {
                  breadcrumb: 'deactivate'
                },
                canActivate: [AuthGuard, AdminAuthGuard]
              }
            ]
          },
          {
            path: 'action/new',
            component: ProjectsNewComponent,
            data: {
              breadcrumb: 'new'
            },
            canActivate: [AuthGuard, AdminAuthGuard]
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    PresentationalComponentsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  declarations: [
    ProjectsComponent,
    ProjectsNewComponent,
    ProjectsDetailComponent,
    ProjectsListComponent,
    ProjectsEditComponent,
    ProjectsActivateComponent,
    ProjectsDeactivateComponent
  ],
  providers: [ProjectsService]
})
export class ProjectsModule {}
