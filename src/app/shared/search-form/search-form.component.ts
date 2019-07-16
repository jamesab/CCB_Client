import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
SearchTerm: string;

  constructor() { }

@Output() SearchTermEvent = new EventEmitter<string>();
@Output() FormCleared = new EventEmitter<boolean>();

@Input() FormName: string;

  ngOnInit() {
  }

  search(form) {
    this.SearchTerm = form.value.search;
    this.SearchTermEvent.emit(this.SearchTerm);
  }

  clear(form) {
    this.SearchTerm = '';
    form.reset();
    this.FormCleared.emit(true);
  }

}
