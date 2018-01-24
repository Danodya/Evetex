import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSidebarNaveOrganizerComponent } from './app-sidebar-nave-organizer.component';

describe('AppSidebarNaveOrganizerComponent', () => {
  let component: AppSidebarNaveOrganizerComponent;
  let fixture: ComponentFixture<AppSidebarNaveOrganizerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppSidebarNaveOrganizerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSidebarNaveOrganizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
