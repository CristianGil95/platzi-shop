import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsSimilarComponent } from './products-similar.component';

describe('ProductsSimilarComponent', () => {
  let component: ProductsSimilarComponent;
  let fixture: ComponentFixture<ProductsSimilarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsSimilarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsSimilarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
