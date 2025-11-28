import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-seller-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './seller-product-card.html',
  styleUrl: './seller-product-card.scss'
})
export class SellerProductCard {
  @Input() sellerName: string = 'ZULLO INDUSTRIES';
  @Input() rating: number = 4.8;
  @Input() price: number = 5000000;
  @Input() successfulPurchases: number = 500;
  @Input() warrantyText: string = '۷ روز تضمین بازگشت کالا';

  formatPrice(price: number): string {
    return new Intl.NumberFormat('fa-IR').format(price);
  }

  addToCart(): void {
    // Handle add to cart logic
    console.log('Add to cart');
  }
}

