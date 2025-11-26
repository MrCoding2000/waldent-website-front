import { Component } from '@angular/core';

@Component({
  selector: 'app-products-cards',
  standalone: true,
  imports: [],
  templateUrl: './products-cards.html',
  styleUrl: './products-cards.scss'
})
export class ProductsCards {
  productsDataList = [1,2,3,4];

}
