import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';
import { Product } from './../../product.model';
import { createCartItem } from './../../product.model';
import { CartStore } from '../../order/components/state/cart.store';
import { CartQuery } from '../../order/components/state/cart.query';
import { ID } from '@datorama/akita';
@Injectable({
  providedIn: 'root'
})
export class CartService {
private products: Product[] = [];
private cart = new BehaviorSubject<Product[]>([]);

cart$ = this.cart.asObservable();

  constructor(
    private cartStore: CartStore,
    private cartQuery: CartQuery
  ) { }

  addCard(product: Product) {
    this.products = [...this.products, product];
    this.cart.next(this.products);
  }

  addProductToCart(productId: Product['id']) {
    const findItem = this.cartQuery.getEntity(productId);
    if (!!findItem) {
      return this.cartStore.updateQuantity(productId);
    }

    const item = createCartItem({
      productId
    });

    return this.cartStore.add(item);
  }
  subtract(productId: Product['id']) {
    const findItem = this.cartQuery.getEntity(productId);
    if (!!findItem) {
      if (findItem.quantity === 1) {
        return this.cartStore.remove(productId);
      }

      return this.cartStore.updateQuantity(findItem.productId, -1);
    }
  }
  remove(productId: ID) {
    this.cartStore.remove(productId);
  }
}
