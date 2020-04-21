import { Component, OnInit, AfterContentInit  } from '@angular/core';
import Swiper from 'swiper';
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  images: string[] = [
    'assets/images/giusyValerii.jpg',
    'assets/images/welcomee.jpg',
    // 'assets/images/bannerBenvenuti22.jpg',
    'assets/images/banner-2.jpg',
  ];
  mySwiper: Swiper;
  constructor() { }

  ngOnInit() {
  }
  // tslint:disable-next-line: use-lifecycle-interface
  ngAfterContentInit() {
    this.mySwiper = new Swiper('.s1', {
      observer: true,
      observeParents: true,
      spaceBetween: 30,
      autoplay: true,
      pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
      },
      navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
      }
      });
  }

}
