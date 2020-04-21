import { Component, OnInit, Input, EventEmitter, } from '@angular/core';
import { ProductsService } from '../../../core/services/products/products.service';
import { Product } from '../../../product.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products: Product[] = [];

   product: Product;

  constructor(

    private productsService: ProductsService,

  ) { }

  ngOnInit() {
  }










}
