import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  OnInit,
  DoCheck,
  OnDestroy,
  ChangeDetectionStrategy
} from '@angular/core';
import { Product } from '../../../product.model';
import { BaseProduct } from '../../../order/components/state/product2.model';
import { CartService } from '../../../core/services/cart.service';
@Component({
  selector: 'app-product',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, DoCheck, OnDestroy {
  @Input()
  textoHijo2: string;
  @Output() productClicked: EventEmitter<any> = new EventEmitter();
  today = new Date();
  @Input() product: BaseProduct;
  @Output() add = new EventEmitter<Product>();
  @Output() subtract = new EventEmitter<Product>();


  constructor(
    private cartService: CartService
  ) {
    console.log('1.constructor');
  }
  // ngOnChanges(changes: SimpleChanges) {
  //     console.log('2.ngOnChange');
  //     console.log(changes);
  // }
  ngOnInit() {
    console.log('3.ngOnInit');
  }
  ngDoCheck() {
    console.log('4. ngDoCheck');
  }
  ngOnDestroy() {
    console.log('5. ngOnDestroy');
  }
  // addCart() {
  //   console.log('añadir al carrito');
  //   // this.productClicked.emit(this.product.id);
  //   this.cartService.addCard(this.product);
  // }
}
