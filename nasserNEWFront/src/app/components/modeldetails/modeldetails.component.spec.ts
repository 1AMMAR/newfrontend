import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeldetailsComponent } from './modeldetails.component';

describe('ModeldetailsComponent', () => {
  let component: ModeldetailsComponent;
  let fixture: ComponentFixture<ModeldetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeldetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModeldetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
