import { Injectable } from '@angular/core';
import { Product } from '../state/product2.model';
import { EntityState, EntityStore,  StoreConfig } from '@datorama/akita';

export interface ProductsState extends EntityState<Product> {
  searchTerm: string;
  filters: {
    price: string;
    title: string;
    deliveryOption: boolean;
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'products' })
export class ProductsStore extends EntityStore<ProductsState, Product> {

  constructor() {
    super({
      searchTerm: '',
      filters: {
        price: null,
        title: null,
        deliveryOption: false
      }
    });
  }

}
