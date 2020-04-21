import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromozionComponent } from './promozion.component';

describe('PromozionComponent', () => {
  let component: PromozionComponent;
  let fixture: ComponentFixture<PromozionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromozionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromozionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
