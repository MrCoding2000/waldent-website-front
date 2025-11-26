import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsCards } from './products-cards';

describe('ProductsCards', () => {
  let component: ProductsCards;
  let fixture: ComponentFixture<ProductsCards>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsCards]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsCards);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
