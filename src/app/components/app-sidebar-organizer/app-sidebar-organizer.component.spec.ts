import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSidebarOrganizerComponent } from './app-sidebar-organizer.component';

describe('AppSidebarOrganizerComponent', () => {
  let component: AppSidebarOrganizerComponent;
  let fixture: ComponentFixture<AppSidebarOrganizerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppSidebarOrganizerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSidebarOrganizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
