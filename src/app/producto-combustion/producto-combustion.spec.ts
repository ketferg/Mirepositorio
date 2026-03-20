import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoCombustion } from './producto-combustion';

describe('ProductoCombustion', () => {
  let component: ProductoCombustion;
  let fixture: ComponentFixture<ProductoCombustion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductoCombustion],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductoCombustion);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
