import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-products-cards',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './products-cards.html',
  styleUrl: './products-cards.scss'
})
export class ProductsCards {
  productsDataList = [1,2,3,4];

}
