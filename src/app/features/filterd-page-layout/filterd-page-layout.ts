import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {FilterPagesHeader} from '../../core/layouts/filter-pages-header/filter-pages-header';
import {Categories} from '../../shared/components/categories/categories';
import {ProductsCards} from '../../shared/components/products-cards/products-cards';
import {BaseService} from '../../core/services/base.service';
import {ProductFilter} from '../../shared/components/product-filter/product-filter';
import {Filter} from '../../shared/components/filter/filter';

@Component({
  selector: 'app-filtered-page-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    FilterPagesHeader,
    Categories,
    ProductsCards,
    ProductFilter,
    Filter
  ],
  templateUrl: './filterd-page-layout.html',
  styleUrl: './filterd-page-layout.scss'
})
export class FilteredPageLayout {
  isMobile: boolean = window.innerWidth <= 768;
  constructor(public baseService: BaseService) {
  }
}
