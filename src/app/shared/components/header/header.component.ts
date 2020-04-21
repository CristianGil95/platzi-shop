import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { map } from 'rxjs/operators';
import { CartService } from '../../../core/services/cart.service';
import { Observable } from 'rxjs';
import { CartQuery } from '../../../order/components/state/cart.query';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  total = 0;
  count$: Observable<number>;
  query: any;
  @Output() searchcriteria = new EventEmitter<string>();
  constructor(
    private cartQuery: CartQuery,
    private cartService: CartService
  ) {
    this.cartService.cart$.subscribe(products => {
      console.log(products);
      this.total = products.length;
    });

    this.count$ = this.cartQuery.selectCount();
  }

  ngOnInit() {
  }

}
