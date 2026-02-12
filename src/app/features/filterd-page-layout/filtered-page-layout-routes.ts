import {Routes} from '@angular/router';

export const FilteredPageLayoutRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./filterd-page-layout').then(m => m.FilteredPageLayout),
    children: [
      {
        path: '',
        redirectTo: 'products',
        pathMatch: 'full'
      },
      {
        path: 'products',
        loadComponent: () => import('../products/products').then(m => m.Products),
      },
      {
        path: 'technicians',
        loadComponent: () => import('../technicians/technicians-list').then(m => m.TechniciansList)
      }
    ]
  }
]
