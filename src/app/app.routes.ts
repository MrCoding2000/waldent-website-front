import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'filtered-layout',
    pathMatch: 'full'
  },
  {
    path: 'filtered-layout',
    loadChildren: () => import('./features/filterd-page-layout/filtered-page-layout-routes').then(m => m.FilteredPageLayoutRoutes)
  },
  {
    path: 'technician/:id',
    loadComponent: () => import('./features/technicians/technicians').then(m => m.Technicians)
  },
  {
    path: 'product/details',
    loadComponent: () => import('./features/product-details/product-details').then(m => m.ProductDetails)
  },
  // {
  //   path: 'sellers',
  //   loadComponent: () => import('./features/sellers/sellers').then(m => m.Sellers)
  // },
  // {
  //   path: 'order-security',
  //   loadComponent: () => import('./features/order-security/order-security').then(m => m.OrderSecurity)
  // },
  // {
  //   path: 'support',
  //   loadComponent: () => import('./features/support/support').then(m => m.Support)
  // },
  // {
  //   path: 'about-us',
  //   loadComponent: () => import('./features/about-us/about-us').then(m => m.AboutUs)
  // },
];
