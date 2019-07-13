//
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//
import {AppService} from '../../app.service';


@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
movie: MovieDetails;

  constructor(private AppService: AppService, private route: ActivatedRoute) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');

    this.AppService.GetMovieDetails(id).subscribe(data => {
      this.movie = data;
    });
  }

}
