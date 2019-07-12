import { Component, OnInit } from '@angular/core';
//
import {AppService} from '../app.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
/* Allow the user to:
SEARCH FOR A MOVIE,
 select a movie and see more details. The more details, the better.,
SORT BY:
  Now Playing
  Popular
  Top Rated
*/
movies: DiscoveryModel;

constructor(private AppService: AppService) { }


  ngOnInit() {
    this.AppService.GetDiscoverMovies().subscribe(data => {
      this.movies = data;
  });
  }

}
