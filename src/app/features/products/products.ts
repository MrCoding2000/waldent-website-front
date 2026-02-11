import { Component } from '@angular/core';
import {ProductFilter} from '../../shared/components/product-filter/product-filter';
import {ProductsCards} from '../../shared/components/products-cards/products-cards';
import {SecondaryMenu} from '../../shared/components/secondary-menu/secondary-menu';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    ProductFilter,
    ProductsCards,
    SecondaryMenu
  ],
  templateUrl: './products.html',
  styleUrl: './products.scss'
})
export class Products {
  secondaryMenuItems: { title: string; routerLink: string; isSoon: boolean }[] = [
    { title: 'محصولات', routerLink: '/products', isSoon: false },
    { title: 'فروشندگان', routerLink: '/sellers', isSoon: true },
    { title: 'تکنسین ها', routerLink: '/technicians', isSoon: true },
    { title: 'آگهی ها', routerLink: '/technicians', isSoon: false },
  ];

}
