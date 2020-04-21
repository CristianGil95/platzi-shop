import { Pipe, PipeTransform } from '@angular/core';
import { Product } from 'src/app/product.model';

export interface OrderProducts {
  quantity: number;
  product: Product;

}
@Pipe({
  name: 'groupProducts'
})

export class GroupProductsPipe implements PipeTransform {

  groupedProducts: any[] = [];

  transform(value: Product[]): any {
    value.forEach(product => {
      // tslint:disable-next-line: triple-equals
      if (this.groupedProducts.length == 0) {
        this.groupedProducts.push(Object.assign(product, {quantity: 1}));
      } else {
        // tslint:disable-next-line: triple-equals
        const repeatedProduct = this.groupedProducts.findIndex(p => p.id == product.id);
        // tslint:disable-next-line: triple-equals
        if (repeatedProduct == -1) {
          this.groupedProducts.push(Object.assign(product, {quantity: 1}));
        } else {
          this.groupedProducts[repeatedProduct].quantity += 1;
        }
      }
    });

    return this.groupedProducts;
  }
}
