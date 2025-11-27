import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [
    NgForOf
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

}
