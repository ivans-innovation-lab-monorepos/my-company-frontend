import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UsersNewComponent } from './users-new/users-new.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersDetailComponent } from './users-detail/users-detail.component';
import { UsersEditComponent } from './users-edit/users-edit.component';
import { Routes, RouterModule } from '@angular/router';
import {
  AuthGuard,
  AdminAuthGuard,
  UsersService
} from '@my-company-frontend/shared';
import { PresentationalComponentsModule } from '@my-company-frontend/presentational-components';

export const usersRoutes: Routes = [
  {
    path: '',
    component: UsersComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: UsersListComponent,
        canActivate: [AuthGuard],
        children: [
          {
            path: ':id',
            component: UsersDetailComponent,
            data: {
              breadcrumb: 'detail'
            },
            canActivate: [AuthGuard],
            children: [
              {
                path: 'action/edit',
                component: UsersEditComponent,
                data: {
                  breadcrumb: 'edit'
                },
                canActivate: [AuthGuard, AdminAuthGuard]
              }
            ]
          },
          {
            path: 'action/new',
            component: UsersNewComponent,
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
  imports: [CommonModule, RouterModule, PresentationalComponentsModule],
  declarations: [
    UsersComponent,
    UsersNewComponent,
    UsersListComponent,
    UsersDetailComponent,
    UsersEditComponent
  ],
  providers: [UsersService]
})
export class UsersModule {}
