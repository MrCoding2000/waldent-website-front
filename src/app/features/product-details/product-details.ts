import { Component } from '@angular/core';
import { OtherSellers } from '../../shared/components/other-sellers/other-sellers';
import { ProductTabs } from '../../shared/components/product-tabs/product-tabs';
import { ImageGalleryModal } from '../../shared/components/image-gallery-modal/image-gallery-modal';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [
    OtherSellers,
    ProductTabs,
    ImageGalleryModal
  ],
  templateUrl: './product-details.html',
  styleUrl: './product-details.scss'
})
export class ProductDetails {
  images = [
    'assets/images/product1.png',
    'assets/images/product2.png',
    'assets/images/product3.png',
    'assets/images/product4.png',
  ];
  active = 0;
  isGalleryModalOpen = false;

  openGalleryModal(index?: number) {
    if (index !== undefined) {
      this.active = index;
    }
    this.isGalleryModalOpen = true;
  }

  closeGalleryModal() {
    this.isGalleryModalOpen = false;
  }
}
