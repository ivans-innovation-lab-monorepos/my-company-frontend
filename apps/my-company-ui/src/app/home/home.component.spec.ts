import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {
  MatButtonModule,
  MatCardModule, MatCheckboxModule, MatCommonModule, MatDatepickerModule, MatIconModule, MatInputModule, MatListModule,
  MatNativeDateModule,
  MatOptionModule,
  MatPaginatorModule, MatRadioModule, MatSelectModule,
  MatSidenavModule, MatTableModule,
  MatTabsModule, MatToolbarModule
} from '@angular/material';

import { HomeComponent } from './home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PresentationalComponentsModule } from '@my-company-frontend/presentational-components';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
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
      ],
      declarations: [HomeComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
