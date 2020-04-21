import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges  } from '@angular/core';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
 
  @Input('cercare') progreso: string = 'hola';
  @Output() cambioValor: EventEmitter<any> = new EventEmitter();
  constructor( ) {
    console.log('Buscaror', this.progreso);
  }

  ngOnInit() {
    console.log('Buscaror', this.progreso);
    this.cambioValor.emit(this.progreso);
  }
  onchanges( newValue: any ) {
    console.log( newValue);
    this.cambioValor.emit(this.progreso);
  }





}
