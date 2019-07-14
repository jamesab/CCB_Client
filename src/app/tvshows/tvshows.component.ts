import { Component, OnInit } from '@angular/core';
//
import { AppService } from '../app.service';

@Component({
  selector: 'app-tvshows',
  templateUrl: './tvshows.component.html',
  styleUrls: ['./tvshows.component.css']
})
export class TvshowsComponent implements OnInit {

  tvShows: TvShowsModel;

  constructor(private AppService: AppService) { }


  ngOnInit() {
      this.AppService.GetPopularTvShows().subscribe(data => {
        this.tvShows = data;
    });
  }

  Next(currentPage) {
    const page = currentPage + 1;
    this.AppService.GetPopularTvShows(page).subscribe(data => {
      this.tvShows = data;
  });
  }

  Previous(currentPage) {
    let page = 1;
    if (currentPage > 1) {
      page = currentPage - 1;
    }
    this.AppService.GetPopularTvShows(page).subscribe(data => {
      this.tvShows = data;
  });
  }
}
