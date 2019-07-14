//
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
//
import {AppService} from '../../app.service';


@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
movie: MovieDetails;
castAndCrew: MovieCastAndCrew;

  constructor(private AppService: AppService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');

    this.AppService.GetMovieCast(id).subscribe(data => {
      this.castAndCrew = data;
    },
      error => {
        this.router.navigate(['**']);
      });

    this.AppService.GetMovieDetails(id).subscribe(data => {
      this.movie = data;
    },
    error => {
      this.router.navigate(['**']);
    });
  }

}
