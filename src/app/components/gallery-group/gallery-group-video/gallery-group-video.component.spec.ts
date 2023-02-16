import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryGroupVideoComponent } from './gallery-group-video.component';

describe('GalleryGroupVideoComponent', () => {
  let component: GalleryGroupVideoComponent;
  let fixture: ComponentFixture<GalleryGroupVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryGroupVideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryGroupVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
