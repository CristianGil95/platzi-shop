import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromozioniComponent } from './promozioni.component';

describe('PromozioniComponent', () => {
  let component: PromozioniComponent;
  let fixture: ComponentFixture<PromozioniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromozioniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromozioniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
