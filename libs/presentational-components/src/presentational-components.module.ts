import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
  MatNavList,
  MatOptionModule,
  MatPaginatorModule,
  MatRadioModule,
  MatSelectModule,
  MatSidenavModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule
} from '@angular/material';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { MainListComponent } from './main-list/main-list.component';
import { MainDetailComponent } from './main-detail/main-detail.component';
import { SideMenuItemComponent } from './side-menu-item/side-menu-item.component';
import { MainDetailBlogComponent } from './main-detail-blog/main-detail-blog.component';
import { MainListBlogComponent } from './main-list-blog/main-list-blog.component';
import { MainNewComponent } from './main-new/main-new.component';
import { MainNewBlogComponent } from './main-new-blog/main-new-blog.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BreadcrumbsModule } from 'ng2-breadcrumbs';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    BrowserAnimationsModule,
    BreadcrumbsModule,
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
  ],
  declarations: [
    SideMenuComponent,
    FooterComponent,
    HeaderComponent,
    MainComponent,
    MainListComponent,
    MainDetailComponent,
    SideMenuItemComponent,
    MainDetailBlogComponent,
    MainListBlogComponent,
    MainNewComponent,
    MainNewBlogComponent,
    BreadcrumbsComponent
  ],
  exports: [
    SideMenuComponent,
    FooterComponent,
    HeaderComponent,
    MainComponent,
    SideMenuItemComponent,
    MainDetailBlogComponent,
    MainListBlogComponent,
    MainNewBlogComponent,
    BreadcrumbsComponent,
    MainNewComponent
  ]
})
export class PresentationalComponentsModule {}
