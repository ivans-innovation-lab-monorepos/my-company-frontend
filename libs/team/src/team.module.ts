import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamComponent } from './team.component';
import { TeamListComponent } from './team-list/team-list.component';
import { TeamNewComponent } from './team-new/team-new.component';
import { TeamDetailComponent } from './team-detail/team-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { PresentationalComponentsModule } from '@my-company-frontend/presentational-components';
import {
  AuthGuard,
  AdminAuthGuard,
  TeamsService
} from '@my-company-frontend/shared';

export const teamRoutes: Routes = [
  {
    path: '',
    component: TeamComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: TeamListComponent,
        canActivate: [AuthGuard],
        children: [
          {
            path: ':id',
            component: TeamDetailComponent,
            data: {
              breadcrumb: 'detail'
            },
            canActivate: [AuthGuard]
          },
          {
            path: 'action/new',
            component: TeamNewComponent,
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
    BrowserAnimationsModule
  ],
  declarations: [
    TeamComponent,
    TeamListComponent,
    TeamNewComponent,
    TeamDetailComponent
  ],
  providers: [TeamsService]
})
export class TeamModule {}
