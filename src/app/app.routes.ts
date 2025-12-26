import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'products'
  },
  {
    path: 'products',
    loadComponent: () => import('./features/products/products').then(m => m.Products)
  },
  {
    path: 'sellers',
    loadComponent: () => import('./features/sellers/sellers').then(m => m.Sellers)
  },
  {
    path: 'technicians',
    loadComponent: () => import('./features/technicians/technicians').then(m => m.Technicians)
  },
  {
    path: 'order-security',
    loadComponent: () => import('./features/order-security/order-security').then(m => m.OrderSecurity)
  },
  {
    path: 'support',
    loadComponent: () => import('./features/support/support').then(m => m.Support)
  },
  {
    path: 'about-us',
    loadComponent: () => import('./features/about-us/about-us').then(m => m.AboutUs)
  },
  {
    path: 'product/details',
    loadComponent: () => import('./features/product-details/product-details').then(m => m.ProductDetails)
  }
];
