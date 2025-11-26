import { Component } from '@angular/core';
import {ProductFilter} from '../../shared/components/product-filter/product-filter';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    ProductFilter
  ],
  templateUrl: './products.html',
  styleUrl: './products.scss'
})
export class Products {

}
