import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserStreamingComponent } from './user-streaming.component';

describe('UserStreamingComponent', () => {
  let component: UserStreamingComponent;
  let fixture: ComponentFixture<UserStreamingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserStreamingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserStreamingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
