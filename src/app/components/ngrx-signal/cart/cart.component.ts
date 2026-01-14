import { Component, inject } from '@angular/core';
import { shopStore } from '../store';
import { ProductModel } from '../../../models/product-model.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  store = inject(shopStore);

  removeFromCart(p:ProductModel){
    this.store.removeFromCart(p)
  }
}
