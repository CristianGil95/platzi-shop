import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductsService } from '../../../core/services/products/products.service';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { ProductsQuery } from '../../../order/components/state/products.query';
import { tap } from 'rxjs/operators';
import { PersistNgFormPlugin } from '@datorama/akita';
@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  filters: FormGroup;
  persistForm: PersistNgFormPlugin;

  constructor(private productsQuery: ProductsQuery) { }

  ngOnInit() {
    this.filters = new FormGroup({
      condition: new FormGroup({
        new: new FormControl(false),
        used: new FormControl(false),
        notSpecified: new FormControl(false)
      }),
      location: new FormControl()
    });

    this.persistForm = new PersistNgFormPlugin(
      this.productsQuery,
      'ui.filters')
      .setForm(this.filters);
  }

  reset() {
    // reset the current state to the initial value
    this.persistForm.reset();
  }


  // tslint:disable-next-line: use-lifecycle-interface
  ngOnDestroy() {
    this.persistForm.destroy();
  }

}
