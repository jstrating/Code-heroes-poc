import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityFeedItemComponent } from './activity-feed-item.component';

describe('ActivityFeedItemComponent', () => {
  let component: ActivityFeedItemComponent;
  let fixture: ComponentFixture<ActivityFeedItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityFeedItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityFeedItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
