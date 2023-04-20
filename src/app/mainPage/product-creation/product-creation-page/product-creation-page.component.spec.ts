import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCreationPageComponent } from './product-creation-page.component';

describe('ProductCreationPageComponent', () => {
  let component: ProductCreationPageComponent;
  let fixture: ComponentFixture<ProductCreationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductCreationPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductCreationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
