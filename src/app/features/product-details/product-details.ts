import { Component } from '@angular/core';
import { OtherSellers } from '../../shared/components/other-sellers/other-sellers';
import { ProductTabs } from '../../shared/components/product-tabs/product-tabs';
import { ImageGalleryModal } from '../../shared/components/image-gallery-modal/image-gallery-modal';
import {NgClass} from '@angular/common';
import {ProductInfo} from '../../shared/components/product-info/product-info';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [
    OtherSellers,
    ProductTabs,
    ImageGalleryModal,
    NgClass,
    ProductInfo
  ],
  templateUrl: './product-details.html',
  styleUrl: './product-details.scss'
})
export class ProductDetails {
}
