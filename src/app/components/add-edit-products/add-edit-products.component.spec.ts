import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditProductsComponent } from './add-edit-products.component';

describe('AddEditProductsComponent', () => {
  let component: AddEditProductsComponent;
  let fixture: ComponentFixture<AddEditProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
