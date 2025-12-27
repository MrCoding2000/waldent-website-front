import { Component } from '@angular/core';
import {DecimalPipe, NgClass} from '@angular/common';
import {ImageGalleryModal} from '../image-gallery-modal/image-gallery-modal';

@Component({
  selector: 'app-product-info',
  standalone: true,
  imports: [
    NgClass,
    ImageGalleryModal,
    DecimalPipe
  ],
  templateUrl: './product-info.html',
  styleUrl: './product-info.scss'
})
export class ProductInfo {
  images = [
    'assets/images/product1.png',
    'assets/images/product2.png',
    'assets/images/product3.png',
    'assets/images/product4.png',
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
