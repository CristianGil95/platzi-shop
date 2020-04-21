import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { Product } from '../../../product.model';

import { CartService } from '../../../core/services/cart.service';
import Swiper from 'swiper';
@Component({
  selector: 'app-products-similar',
  templateUrl: './products-similar.component.html',
  styleUrls: ['./products-similar.component.scss']
})
export class ProductsSimilarComponent implements OnInit {

  @Input() mySwiper1: Swiper;
  @Input() product: Product;
  @Output() productClicked: EventEmitter<any> = new EventEmitter();
  simillarProducts: Product[] = [];
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
