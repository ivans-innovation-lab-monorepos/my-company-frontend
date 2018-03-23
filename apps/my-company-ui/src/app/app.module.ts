import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PresentationalComponentsModule } from '@my-company-frontend/presentational-components';
import { JwtHelperService, JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';

import {
  MatSidenavModule,
  MatInputModule,
  MatCardModule,
  MatButtonModule
} from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BreadcrumbsModule } from 'ng2-breadcrumbs';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import {
  AuthenticationService,
  ProjectModel,
  TOKEN_NAME,
  AuthGuard,
  AdminAuthGuard,
  UserService,
  EventManager
} from '@my-company-frontend/shared';
import { projectRoutes, ProjectsModule } from '@my-company-frontend/projects';
import { teamRoutes, TeamModule } from '@my-company-frontend/team';
import { blogRoutes, BlogModule } from '@my-company-frontend/blog';
import { usersRoutes, UsersModule } from '@my-company-frontend/users';

export function tokenGenerator() {
  return localStorage.getItem(TOKEN_NAME);
}

export function jwtOptionsFactory() {
  return {
    tokenGetter: tokenGenerator,
    throwNoTokenError: false,
    whitelistedDomains: [
      'localhost:8080',
      'stage-my-company-monolith.cfapps.io',
      'prod-my-company-monolith.cfapps.io'
    ]
  };
}

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: []
  },
  {
    path: 'login',
    data: {
      breadcrumb: 'Login'
    },
    component: LoginComponent
  },
  {
    path: 'blog',
    children: blogRoutes,
    data: {
      breadcrumb: 'blog'
    }
  },
  {
    path: 'projects',
    children: projectRoutes,
    data: {
      breadcrumb: 'projects'
    }
  },
  {
    path: 'teams',
    children: teamRoutes,
    data: {
      breadcrumb: 'teams'
    }
  },
  {
    path: 'users',
    children: usersRoutes,
    data: {
      breadcrumb: 'users'
    }
  }
];

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    BlogModule,
    ProjectsModule,
    TeamModule,
    UsersModule,
    ReactiveFormsModule,
    FormsModule,
    BreadcrumbsModule,
    FlexLayoutModule,
    PresentationalComponentsModule,
    MatSidenavModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    NxModule.forRoot(),
    JwtModule.forRoot({
      jwtOptionsProvider: {
        provide: JWT_OPTIONS,
        useFactory: jwtOptionsFactory
      }
    }),
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled'
    })
  ],
  declarations: [AppComponent, LoginComponent, HomeComponent],
  bootstrap: [AppComponent],
  providers: [
    AuthenticationService,
    AuthGuard,
    AdminAuthGuard,
    UserService,
    JwtHelperService,
    EventManager
  ]
})
export class AppModule {}
