import { NgModule } from '@angular/core';
import { BrowserModule, EventManager } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PresentationalComponentsModule } from '@my-company-frontend/presentational-components';
import { MatSidenavModule, MatInputModule, MatCardModule, MatButtonModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BreadcrumbsModule } from 'ng2-breadcrumbs';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AuthenticationService, ProjectModel } from '@my-company-frontend/shared';
import { projectRoutes, ProjectsModule } from '@my-company-frontend/projects';
import { teamRoutes, TeamModule } from '@my-company-frontend/team';
import { blogRoutes, BlogModule } from '@my-company-frontend/blog';


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
    },
  },
  { 
    path: 'projects', 
    children: projectRoutes,
    data: {
      breadcrumb: 'projects'
    },
  },
  { 
    path: 'teams', 
    children: teamRoutes,
    data: {
      breadcrumb: 'teams'
    },
  }
];

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    BlogModule,
    ProjectsModule,
    TeamModule,
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
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled'
    })
  ],
  declarations: [AppComponent, LoginComponent, HomeComponent],
  bootstrap: [AppComponent],
  providers: [AuthenticationService, EventManager]
})
export class AppModule {}
