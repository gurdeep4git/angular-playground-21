import { Component, inject, OnInit } from '@angular/core';
import { shopStore } from '../store';
import { ProductModel } from '../../../models/product-model.model';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent{
  store = inject(shopStore);

  onAddToCart(p:ProductModel):void{
    this.store.addToCart(p)
  }
}
