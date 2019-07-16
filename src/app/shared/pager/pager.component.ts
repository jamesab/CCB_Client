import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.css']
})
export class PagerComponent implements OnInit {

  @Input() total_results: number;
  @Input() total_pages: number;
  @Input() current_page: number;

  @Output() SendCurrentPage = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  Next(page) {
    this.current_page = page + 1;
    this.SendCurrentPage.emit(this.current_page);
  }

  Previous(pgumber) {
    this.current_page =  1;
    if (pgumber > 1) {
      this.current_page = pgumber - 1;
    }
    this.SendCurrentPage.emit(this.current_page);
  }

}
