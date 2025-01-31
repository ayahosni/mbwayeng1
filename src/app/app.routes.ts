import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent),
  },
  {
    path: 'contact',
    loadComponent: () => import('./components/contact/contact.component').then(m => m.ContactComponent),
  },
  {
    path: 'products',
    loadComponent: () => import('./components/products/products.component').then(m => m.ProductsComponent),
  },
{
  path: 'about',
  loadComponent: () => import('./components/about/about.component').then(m => m.AboutComponent),
   },
   {
    path: 'services',
    loadComponent: () => import('./components/services/services.component').then(m => m.ServicesComponent),
     },
     {
      path: 'gallery',
      loadComponent: () => import('./components/gallery/gallery.component').then(m => m.GalleryComponent),
       },
  {
    path: 'product-details/:id', 
    loadComponent: () => import('./components/product-details/product-details.component').then( (m) => m.ProductDetailsComponent
     
    ),
     
  },
  
  {
    path: '**',
    redirectTo: '/home',
  },
];
