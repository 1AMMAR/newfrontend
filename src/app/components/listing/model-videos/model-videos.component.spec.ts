import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelVideosComponent } from './model-videos.component';

describe('ModelVideosComponent', () => {
  let component: ModelVideosComponent;
  let fixture: ComponentFixture<ModelVideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelVideosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
