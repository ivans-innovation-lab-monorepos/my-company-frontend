import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatDatepickerModule,
  MatInputModule
} from '@angular/material';
import { BlogPublishComponent } from './blog-publish/blog-publish.component';

import { BlogUnPublishComponent } from './blog-unpublish/blog-unpublish.component';
import { BlogComponent } from './blog.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogNewComponent } from './blog-new/blog-new.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PresentationalComponentsModule } from '@my-company-frontend/presentational-components';
import { RouterModule, Routes } from '@angular/router';
import {
  AuthGuard,
  AdminAuthGuard,
  BlogService
} from '@my-company-frontend/shared';

export const blogRoutes: Routes = [
  {
    path: '',
    component: BlogComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: BlogListComponent,
        canActivate: [AuthGuard],
        children: [
          {
            path: ':id',
            component: BlogDetailComponent,
            data: {
              breadcrumb: 'detail'
            },
            canActivate: [AuthGuard],
            children: [
              {
                path: 'action/publish',
                component: BlogPublishComponent,
                data: {
                  breadcrumb: 'publish'
                },
                canActivate: [AuthGuard, AdminAuthGuard]
              },
              {
                path: 'action/unpublish',
                component: BlogUnPublishComponent,
                data: {
                  breadcrumb: 'unpublish'
                },
                canActivate: [AuthGuard, AdminAuthGuard]
              }
            ]
          },
          {
            path: 'action/new',
            component: BlogNewComponent,
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
    MatDatepickerModule,
    MatInputModule,
    MatButtonModule
  ],
  declarations: [
    BlogComponent,
    BlogDetailComponent,
    BlogListComponent,
    BlogNewComponent,
    BlogPublishComponent,
    BlogUnPublishComponent
  ],
  providers: [BlogService]
})
export class BlogModule {}
