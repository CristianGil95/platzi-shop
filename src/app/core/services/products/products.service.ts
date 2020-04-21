import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
// import { Product } from '../../../product.model';
import { environment } from '../../../../environments/environment';
import { tap, } from 'rxjs/operators';

import { Observable, timer, Subject, throwError } from 'rxjs';
import { ID} from '@datorama/akita';

import { ProductsStore  } from '../../../order/components/state/products.store';

import { ProductsQuery } from 'src/app/order/components/state/products.query';
import { BaseProduct, Product} from '../../../order/components/state/product2.model';
import { map, catchError, retry} from 'rxjs/operators';

interface User {
  email: string;
  gender: string;
  phone: string;
}
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  // products: Product[] = [
  //   {
  //     id: "1",
  //     image: "assets/images/camiseta.png",
  //     title: "Camiseta",
  //     price: 80000,
  //     description: "bla bla bla bla bla"
  //   },
  //   {
  //     id: "2",
  //     image: "assets/images/hoodie.png",
  //     title: "Hoodie",
  //     price: 80000,
  //     description: "bla bla bla bla bla"
  //   },
  //   {
  //     id: "3",
  //     image: "assets/images/mug.png",
  //     title: "mug",
  //     price: 80000,
  //     description: "bla bla bla bla bla"
  //   },
  //   {
  //     id: "4",
  //     image: "assets/images/pin.png",
  //     title: "Pin",
  //     price: 80000,
  //     description: "bla bla bla bla bla"
  //   },
  //   {
  //     id: "5",
  //     image: "assets/images/stickers1.png",
  //     title: "Stickers",
  //     price: 80000,
  //     description: "bla bla bla bla bla"
  //   },
  //   {
  //     id: "6",
  //     image: "assets/images/stickers2.png",
  //     title: "Stickers",
  //     price: 80000,
  //     description: "bla bla bla bla bla"
  //   }
  // ];

  constructor(
    private http: HttpClient,
    private productsStore: ProductsStore,
    private productsQuery: ProductsQuery,
    ) {}


    getAll(term: string, filters) {
      return this.http.get<BaseProduct[]>(`${environment.url_api}/products`, { params: { term, ...filters } }).pipe(
        tap(products => this.productsStore.set(products))
      );
    }
    getProduct(id: ID) {
      return this.http.get<Product>(`${environment.url_api}/products/${id}`).pipe(
        tap(product => this.productsStore.upsert(id, product))
      );
    }
    updateFilters(filters) {
      this.productsStore.update({ filters });
    }

    updateSearchTerm(searchTerm: string) {
      this.productsStore.update({ searchTerm });
      this.invalidateCache();
    }

    invalidateCache() {
      this.productsStore.setHasCache(false);
    }



  getAllProducts() {
  return this.http.get<Product[]>(`${environment.url_api}/products`);
  }
  getSimillarProducts() {
    return this.http.get<Product[]>(`${environment.url_api}/products`);
  }
  // getProduct(id: string) {
  //   return this.products.find(item => id === item.id);
  // }
  // getProduct(id: string) {
  //   return this.http.get<Product>(`${environment.url_api}/products/${id}`);
  // }
  createProduct(product: Product) {
    return this.http.post(`${environment.url_api}/products`, product );
  }
  updateProduct(id: string, changes: Partial<Product>) {
    return this.http.put(`${environment.url_api}/products/${id}`, changes);
  }
  deleteProduct(id: string) {
    return this.http.delete(`${environment.url_api}/products/${id}`);
  }

  getRandomUsers(): Observable<User[]> {
    return this.http.get('https://randomuser.me/api/?results=2')
    .pipe(
      retry(3),
      catchError(this.handleError),
      map((response: any) => response.results as User[])
    );
  }
  private handleError(error: HttpErrorResponse) {
    console.log(error);
    return throwError('ups algo salio mal');
  }

}
