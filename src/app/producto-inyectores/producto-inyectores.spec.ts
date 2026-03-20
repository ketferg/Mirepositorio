import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoInyectores } from './producto-inyectores';

describe('ProductoInyectores', () => {
  let component: ProductoInyectores;
  let fixture: ComponentFixture<ProductoInyectores>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductoInyectores],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductoInyectores);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
