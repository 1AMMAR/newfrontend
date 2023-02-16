import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelImageUploadComponent } from './model-image-upload.component';

describe('ModelImageUploadComponent', () => {
  let component: ModelImageUploadComponent;
  let fixture: ComponentFixture<ModelImageUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelImageUploadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelImageUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
