import { Component, OnInit, ChangeDetectorRef, Input} from '@angular/core';

import { Product } from '../../../product.model';
import { ProductsService } from '../../../core/services/products/products.service';
import { CartService} from '../../../core/services/cart.service';
import { combineLatest, EMPTY, Observable } from 'rxjs';
import { ProductsQuery} from '../../../order/components/state/products.query';
import { FormControl } from '@angular/forms';
import { startWith, switchMap } from 'rxjs/operators';
import { untilDestroyed } from 'ngx-take-until-destroy';



@Component({
  selector: 'app-products',
  templateUrl: './products.container.html',
  styleUrls: ['./products.container.scss']
})
// tslint:disable-next-line: component-class-suffix
export class ProductsContainer implements OnInit {

  @Input()
  textoHijo2: string;
  products: Product[] = [];
  isLoading$: Observable<boolean>;
  products$: Observable<Product[]>;
  searchTerm: '';
  search = new FormControl();


  constructor(
    private cartService: CartService,
    private productsService: ProductsService,
    private productsQuery: ProductsQuery,
    private ref: ChangeDetectorRef
    ) {

    }


  ngOnInit() {
    this.isLoading$ = this.productsQuery.selectLoading();
    this.products$ = this.productsQuery.selectAll();


    combineLatest([
      this.productsQuery.selectHasCache(),
      this.productsQuery.selectFilters$,
      this.productsQuery.selectSearchTerm$,
    ]).pipe(switchMap(([cached, filters, term]) => {
      return cached ? EMPTY : this.productsService.getAll(term, filters);
    }), untilDestroyed(this)).subscribe({
      error() {
        // show error
      }
    });
  }
  // tslint:disable-next-line: use-lifecycle-interface
  ngOnDestroy() {
    // To protect you, we'll throw an error if it doesn't exist.
  }

  clickProduct(id: number) {
    console.log('product');
    console.log(id);
  }

  addProductToCart({ id }: Product) {
    this.cartService.addProductToCart(id);
  }


  subtract({ id }: Product) {
    this.cartService.subtract(id);
  }

  // tslint:disable-next-line: use-lifecycle-interface

}
