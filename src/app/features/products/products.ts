import { Component } from '@angular/core';
import {ProductFilter} from '../../shared/components/product-filter/product-filter';
import {ProductsCards} from '../../shared/components/products-cards/products-cards';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    ProductFilter,
    ProductsCards
  ],
  templateUrl: './products.html',
  styleUrl: './products.scss'
})
export class Products {

}
