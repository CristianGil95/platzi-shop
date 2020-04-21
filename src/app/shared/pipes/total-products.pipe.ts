import { Pipe, PipeTransform } from '@angular/core';
import { Product } from 'src/app/product.model';

export interface OrderPrice {
  quantity: number;
  product: Product;

}
@Pipe({
  name: 'totalProducts'
})
export class TotalProductsPipe implements PipeTransform {
  totalProducts: any[] = [];
  // tslint:disable-next-line: ban-types
  total: Number  = 0;
items: OrderPrice[] = [];
  transform(value: Product[]): any {

      this.total = 0;
      this.items = [];
      const totalProducts = JSON.parse(localStorage.getItem('cart'));
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < totalProducts.length; i++) {
        const item = JSON.parse(totalProducts[i]);
        this.items.push({
          product: item.product,
          quantity: item.quantity
        });
        this.total = item.product.price * item.quantity;

    }
      return this.total;
  }

}
