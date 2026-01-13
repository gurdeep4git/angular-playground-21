import { Signal, WritableSignal } from "@angular/core";

export interface Product {
  id: number;
  title: string;
  price: number;
  rating:number;
  quantity: WritableSignal<number>
  totalPrice: Signal<number>
}
