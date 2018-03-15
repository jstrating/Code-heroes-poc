import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitySideNavComponent } from './activity-side-nav.component';

describe('ActivitySideNavComponent', () => {
  let component: ActivitySideNavComponent;
  let fixture: ComponentFixture<ActivitySideNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivitySideNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivitySideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
