import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelsWithVideosComponent } from './models-with-videos.component';

describe('ModelsWithVideosComponent', () => {
  let component: ModelsWithVideosComponent;
  let fixture: ComponentFixture<ModelsWithVideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelsWithVideosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelsWithVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
