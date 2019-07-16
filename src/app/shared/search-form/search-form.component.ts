import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {


  constructor() { }

@Input() searchTerm: string;
@Input() isSearching: boolean;

  ngOnInit() {
    this.isSearching = false;
    this.searchTerm = '';
  }

  search(form) {
    this.searchTerm = form.value.search;
    if (this.searchTerm !== '') {
      //   this.AppService.SearchTvShows(form.value.search).subscribe(data => {
      //     this.tvShows = data;
      //     this.isSearching = true;
      // });
    } else {
      // this.AppService.GetPopularTvShows().subscribe(data => {
      //   this.tvShows = data;
      //   this.isSearching = false;
      // });
    }
}

}
