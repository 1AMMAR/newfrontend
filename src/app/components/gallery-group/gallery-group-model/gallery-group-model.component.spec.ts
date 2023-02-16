import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryGroupModelComponent } from './gallery-group-model.component';

describe('GalleryGroupModelComponent', () => {
  let component: GalleryGroupModelComponent;
  let fixture: ComponentFixture<GalleryGroupModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryGroupModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryGroupModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
