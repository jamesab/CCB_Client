import { Component, OnInit } from '@angular/core';
//
import { AppService } from '../app.service';

@Component({
  selector: 'app-tvshows',
  templateUrl: './tvshows.component.html',
  styleUrls: ['./tvshows.component.css']
})
export class TvshowsComponent implements OnInit {
  isSearching = false;
  searchTerm = '';
  tvShows: TvShowsModel;

  constructor(private AppService: AppService) { }


  ngOnInit() {
      this.AppService.GetPopularTvShows().subscribe(data => {
        this.tvShows = data;
    });
  }

  FormCleared(event) {
    if (event) {
      this.searchTerm = '';
      this.isSearching = false;
      this.AppService.GetPopularTvShows().subscribe(data => {
        this.tvShows = data;
      });
    }
  }

  GetSearchTerm(term) {
    this.searchTerm = term;
    if (this.searchTerm !== '') {
        this.AppService.SearchTvShows(term).subscribe(data => {
          this.tvShows = data;
          this.isSearching = true;
      });
    } else {
      this.AppService.GetPopularTvShows().subscribe(data => {
        this.tvShows = data;
        this.isSearching = false;
      });
    }
}

GetCurrentPage(page) {
    if (this.isSearching) {
      this.AppService.SearchTvShows(this.searchTerm, page).subscribe(data => {
        this.tvShows = data;
        this.isSearching = true;
      });
    } else {
      this.AppService.GetPopularTvShows(page).subscribe(data => {
        this.tvShows = data;
        this.isSearching = false;
      });
    }
  }

}
