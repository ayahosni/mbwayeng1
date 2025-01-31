import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Products, products } from '../../models/product.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})

export class ProductDetailsComponent implements OnInit {
  product: Products | undefined;
  currentImageIndex: number = 0; 
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const productId = Number(this.route.snapshot.paramMap.get('id'));
    this.product = products.find(p => p.id === productId);
  }

  // تغيير الصورة المعروضة
  changeImage(index: number): void {
    this.currentImageIndex = index;
  }
}