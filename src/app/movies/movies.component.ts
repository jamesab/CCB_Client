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

isSearching = false;
searchTerm = '';

  ngOnInit() {
      this.AppService.GetDiscoverMovies().subscribe(data => {
        this.movies = data;
    });
  }

  FormCleared(event) {
    if (event) {
      this.isSearching = false;
      this.searchTerm = '';
      this.AppService.GetDiscoverMovies().subscribe(data => {
        this.movies = data;
      });
    }
  }

  GetSearchTerm(event) {

    this.searchTerm = event;
    if (event !== '') {
      this.AppService.SearchMulti(event).subscribe(data => {
           this.movies = data;
           this.isSearching = true;
      });
    } else {
      this.AppService.GetDiscoverMovies().subscribe(data => {
        this.movies = data;
        this.isSearching = false;
    });
    }
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


  Next(currentPage) {
    const page = currentPage + 1;
    if (this.isSearching) {
      this.AppService.SearchMulti(this.searchTerm, page).subscribe(data => {
        this.movies = data;
        this.isSearching = true;
      });
    } else {
      this.AppService.GetDiscoverMovies(page).subscribe(data => {
        this.movies = data;
      });
    }
  }

  Previous(currentPage) {
    let page = 1;
    if (currentPage > 1) {
      page = currentPage - 1;
    }
    if (this.isSearching) {
      this.AppService.SearchMulti(this.searchTerm, page).subscribe(data => {
        this.movies = data;
        this.isSearching = true;
      });
    } else {
        this.AppService.GetDiscoverMovies(page).subscribe(data => {
          this.movies = data;
      });
    }
  }


}
