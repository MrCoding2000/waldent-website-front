import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerProductCard } from './seller-product-card';

describe('SellerProductCard', () => {
  let component: SellerProductCard;
  let fixture: ComponentFixture<SellerProductCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SellerProductCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellerProductCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

