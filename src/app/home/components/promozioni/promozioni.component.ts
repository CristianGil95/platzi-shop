import { Component, OnInit, AfterContentInit  } from '@angular/core';
import { Product } from '../../../product.model';
import { ProductsService } from '../../../core/services/products/products.service';
import { CartService } from '../../../core/services/cart.service';
import { combineLatest, EMPTY, Observable } from 'rxjs';
import { ProductsQuery} from '../../../order/components/state/products.query';
import Swiper from 'swiper';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute, Params } from '@angular/router';
import { untilDestroyed } from 'ngx-take-until-destroy';

@Component({
  selector: 'app-promozioni',
  templateUrl: './promozioni.component.html',
  styleUrls: ['./promozioni.component.scss']
})
export class PromozioniComponent implements OnInit, AfterContentInit {
  mySwiper1: Swiper;


  products: Product[] = [];
  isLoading$: Observable<boolean>;
  products$: Observable<Product[]>;
  alert: any;
  closeAlert: any;
  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private cartService: CartService,
    private productsQuery: ProductsQuery
    ) { }

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
    ngAfterContentInit() {
      this.mySwiper1 = new Swiper('.s2', {
          observer: true,
          observeParents: true,

          slidesPerView: 3,
          spaceBetween: 10,

          breakpoints: {
              640: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            },
          autoplay: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
           navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },

        });


    }
    clickProduct(id: number) {
      console.log('product');
      console.log(id);
    }
    addProductToCart({ id }: Product) {
      this.cartService.addProductToCart(id);
      this.alert.push({
        id: 1,
        type: 'success',
        message: 'car'
      });
      setTimeout(() => {
        this.closeAlert(this.alert);
      }, 3000);
    }


  // tslint:disable-next-line: use-lifecycle-interface
  ngOnDestroy() {
    // To protect you, we'll throw an error if it doesn't exist.
  }
}
