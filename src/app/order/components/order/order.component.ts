import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Product } from '../../../product.model';
import { CartItem} from '../../../product.model';
import { CartService } from '../../../core/services/cart.service';

import { Observable } from 'rxjs';

import { CartQuery } from '../state/cart.query';



@Component({
  selector: 'app-order',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  displayedColumns = ['image', 'title', 'price', 'quantity', 'total', 'eliminar' ];

  items$: Observable<(CartItem & Product)[]>;
  total$: Observable<number>;
  constructor(
    private cartQuery: CartQuery, private cartService: CartService
  ) {}

  ngOnInit() {
    this.items$ = this.cartQuery.selectItems$;
    this.total$ = this.cartQuery.selectTotal$;
  }
  remove({ productId }: CartItem) {
    this.cartService.remove(productId);
  }
  addProductToCart({ id }: Product) {
    this.cartService.addProductToCart(id);
  }
  subtract({ id }: Product) {
    this.cartService.subtract(id);
  }
  // getTotalCost() {
  //   return this.products$.pipe(map(p => p.reduce((acc, product) => acc + product.price, 0)));
  // }




}
