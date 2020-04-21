import { Component, OnInit, AfterContentInit, EventEmitter, AfterViewChecked } from '@angular/core';
import { ActivatedRoute, Params, Router, NavigationEnd } from '@angular/router';
import { ProductsService } from '../../../core/services/products/products.service';
import { Product } from '../../../product.model';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { CartService } from '../../../core/services/cart.service';
import Swiper from 'swiper';

interface User {
  email: string;
  gender: string;
  phone: string;
}


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit, AfterContentInit {
user: User[] = [];

  product$: Observable<Product>;
  images: string[] = [
    'assets/images/camiseta.png',
    'assets/images/camiseta.png',
    'assets/images/camiseta.png',
    'assets/images/camiseta.png',
    'assets/images/camiseta.png',
  ];
  galleryThumbs: Swiper;
  galleryTop: Swiper;
  mySwiper1: Swiper;
  simillarProducts: Product[] = [];
  scrollToTop: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private cartService: CartService,
  ) {

  }

  ngOnInit() {

    this.product$ = this.route.params
    .pipe(
      switchMap((params: Params) => {
        this.newMethod();
        return this.productsService.getProduct(params.id);
      })
      );

    this.fetchProducts();
    // this.getRandomUsers();
  }

getRandomUsers() {
  this.productsService.getRandomUsers()
  .subscribe(users => {
    console.log(users);
    this.user = users;
  },
  error => {
    console.error(error);
  });

}

  private newMethod() {
    let top = document.getElementById('top');
    if (top !== null) {
      top.scrollIntoView();
      top = null;
    }
  }

  addProductToCart({ id }: Product) {
    this.cartService.addProductToCart(id);
  }
  subtract({ id }: Product) {
    this.cartService.subtract(id);
  }

  ngAfterContentInit() {


    this.galleryThumbs = new Swiper('.gallery-thumbs', {
      observer: true,
      observeParents: true,
      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
    });
    this.galleryTop = new Swiper('.gallery-top', {
      observer: true,
      observeParents: true,
      spaceBetween: 10,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      thumbs: {
        swiper: this.galleryThumbs
      }
    });

    this.mySwiper1 = new Swiper('.s2', {
      observer: true,
      observeParents: true,

      slidesPerView: 3,
      spaceBetween: 10,

      breakpoints: {
          640: {
            slidesPerView: 2,
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
  fetchProducts() {
    this.productsService.getSimillarProducts()
    .subscribe(products => {
      console.log(products);
      this.simillarProducts = products;
    });
    let top = document.getElementById('top');
    if (top !== null) {
      top.scrollIntoView();
      top = null;
    }
  }

  createProduct() {
    const newProduct: Product = {
      id: '222',
      title: 'nuevo desde angular',
      image: 'assets/images/banner-1.jpg',
      price: 30000,
      description: 'nuevoProducto'
    };

    this.productsService.createProduct(newProduct).subscribe(product => {
      console.log(product);
    });
  }

  updateProduct() {
    const updateProduct: Partial<Product> = {
      price: 5555,
      description: 'edicion title'
    };
    this.productsService.updateProduct('2', updateProduct).subscribe(product => {
      console.log(product);
    });
  }
  deleteProduct() {
    return this.productsService.deleteProduct('21').subscribe(rta => {
      console.log(rta);
    });
  }

}
