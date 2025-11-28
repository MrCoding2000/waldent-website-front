import { Component } from '@angular/core';

interface Seller {
  id: number;
  name: string;
  logo: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  warranty: string;
  canAddToCart: boolean;
}

@Component({
  selector: 'app-other-sellers',
  standalone: true,
  imports: [],
  templateUrl: './other-sellers.html',
  styleUrl: './other-sellers.scss'
})
export class OtherSellers {
  sellers: Seller[] = [
    {
      id: 1,
      name: 'Yangjiang Little Star Hardware Products Co., Ltd',
      logo: 'assets/images/little-star-logo.png',
      price: 4500000,
      originalPrice: 5000000,
      discount: 10,
      warranty: 'شش ماه گارانتی دنت کالا',
      canAddToCart: true
    },
    {
      id: 2,
      name: 'Shenzhen Weichenyang Technology Co.,ltd.',
      logo: 'assets/images/weichenyang-logo.png',
      price: 0,
      warranty: '۱ سال گارانتی شرکتی',
      canAddToCart: false
    }
  ];

  addToCart(sellerId: number): void {
    // Handle add to cart logic
    console.log('Add to cart for seller:', sellerId);
  }

  contactSeller(sellerId: number): void {
    // Handle contact seller logic
    console.log('Contact seller:', sellerId);
  }

  viewMore(): void {
    // Handle view more logic
    console.log('View more sellers');
  }

  formatPrice(price: number): string {
    return new Intl.NumberFormat('fa-IR').format(price);
  }
}

