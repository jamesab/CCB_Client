import { Component, OnInit } from '@angular/core';
//
import {AppService} from '../app.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

movies: DiscoveryModel;

constructor(private AppService: AppService) { }


  ngOnInit() {
      this.AppService.GetDiscoverMovies().subscribe(data => {
        this.movies = data;
    });
  }

  search(form) {
      this.AppService.SearchMovies(form.value.search).subscribe(data => {
        this.movies = data;
    });
  }

  SortBy(event) {
    switch (event.target.value) {
      case 'Now Playing':
      this.AppService.GetNowPlaying().subscribe(data => {
        this.movies = data;
      });
      break;
      case 'Popular':
      this.AppService.GetPopular().subscribe(data => {
        this.movies = data;
      });
      break;
      case 'Top Rated':
      this.AppService.GetTopRated().subscribe(data => {
        this.movies = data;
      });
      break;
      default:
      console.log(`What is this? ${event.target.value}`);
      break;
    }
  }

}
