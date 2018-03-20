import { NgModule } from '@angular/core';
import { BrowserModule, EventManager } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { RouterModule, Routes } from '@angular/router';
import { blogRoutes, BlogModule } from '@my-company-frontend/blog/src/blog.module';
import { BlogComponent } from '@my-company-frontend/blog/src/blog.component';
import { LoginComponent } from './login/login.component';
import { PresentationalComponentsModule } from '@my-company-frontend/presentational-components';
import { MatSidenavModule, MatInputModule, MatCardModule, MatButtonModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BreadcrumbsModule } from 'ng2-breadcrumbs';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AuthenticationService } from '@my-company-frontend/shared/src/authentication.service';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';


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
    children: blogRoutes 
  }
];

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    BlogModule,
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
