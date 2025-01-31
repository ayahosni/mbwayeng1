// src/app/products/products.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // استيراد RouterModule

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterModule], // إضافة RouterModule هنا
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products = [
    {
      id: 1, // أضف id لكل منتج
      image: 'assets/images/prod1.avif',
      title: 'ATLAS COPCO ',
      description: 'A THREE-handed drilling one box machine',
      price: 496000.00
    },
    {
      id: 2, // أضف id لكل منتج
      image: 'assets/images/prod2.avif',
      title: 'ATLAS COPCO EPIROC ',
      description: '  Surface drill rig for quarrying and construction',

      price: 390000.00
    },
    {
      id: 3, // أضف id لكل منتج
      image: 'assets/images/prod3.avif',
      title: 'BSP ROBO SHOTCRETE ',
      description: 'BSP ROBO SHOTCRETE',
      price: 170000.00, // السعر
    },
    {
      id: 4, // أضف id لكل منتج
      image: 'assets/images/prod4.avif',
      title: 'ATLAS COPCO & 2010',
      description: 'Two-handed drilling',
      price: 325000.00, // السعر
    },
    {
      id: 5, // أضف id لكل منتج
      image: 'assets/images/prod5.avif',
      title: 'ATLAS COPCO & 2015',
      description: 'A THREE-handed drilling ',
      price: 490000.00, // السعر
    },
    {
      id: 6, // أضف id لكل منتج
      image: 'assets/images/prod8.avif',
      title: 'ATLAS COPCO & 2015',
      description: 'A THREE-handed drilling',
      price: 490000.00, // السعر
    },
    {
      id: 7, // أضف id لكل منتج
      image: 'assets/images/produ7.avif',
      title: 'ATLAS COPCO & 2016',
      description: 'A THREE-handed drilling',
      price: 500000.00, // السعر
    },
    {
      id: 8, // أضف id لكل منتج
      image: 'assets/images/prod9.avif',
      title: 'JUMBO 2 ARMS FURUKAWA',
      description: 'A THREE-handed drilling',
      price: 160000.00, // السعر
    }
  ];
  addToCart(product: any) {
    console.log('Product added to cart:', product);
   
  }
}