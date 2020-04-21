import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { HttpClient} from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { ProductsService } from './products.service';
import { stringify } from 'querystring';

fdescribe('ProductsService', () => {

  let httpCllient: HttpClient;
  let httpTestingController: HttpTestingController;
  let service: ProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });

    httpCllient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(ProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  describe('tests for getAllProducts', () => {

    it('should return products', () => {
      // arrange
      const expectData = [
        {
          id: '1',
          title: 'asas',
          price: 1212,
          description: 'asas',
          image: 'img/img.jpg'
        },
        {
          id: '2',
          title: 'sdfdf',
          price: 1212,
          description: 'asas',
          image: 'img/img.jpg'
        }
      ];
      // tslint:disable-next-line: one-variable-per-declaration
      let dataError, dataResponse;
      // act
      console.log(service);
      service.getAllProducts()
        .subscribe(response => {
          dataResponse = response;
        }, error => {
          dataError = error;
        });
      const req = httpTestingController.expectOne(`${environment.url_api}/products`);
      req.flush(expectData);
      // assert
      expect(dataResponse.length).toEqual(2);
      expect(req.request.method).toEqual('GET');
      expect(dataError).toBeUndefined();
    });

  });
});
