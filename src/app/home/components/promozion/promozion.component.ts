import {
  Component,
  OnInit,
  Input,
  AfterContentInit,
  Output,
  EventEmitter,

} from '@angular/core';
import { Product } from '../../../product.model';
import { CartService } from '../../../core/services/cart.service';
import Swiper from 'swiper';

@Component({
  selector: 'app-promozion',
  templateUrl: './promozion.component.html',
  styleUrls: ['./promozion.component.scss']
})
export class PromozionComponent implements OnInit {
  @Input() mySwiper1: Swiper;
  @Input() product: Product;


  @Output() add = new EventEmitter<Product>();

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {
  }


  addCart() {
    console.log('añadir al carrito');
    // this.productClicked.emit(this.product.id);
    this.cartService.addCard(this.product);
  }


}
