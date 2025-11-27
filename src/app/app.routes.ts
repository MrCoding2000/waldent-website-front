import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'products',
    loadComponent: () => import('./features/products/products').then(m => m.Products)
  },
  {
    path: 'product/details',
    loadComponent: () => import('./features/product-details/product-details').then(m => m.ProductDetails)
  }
];
