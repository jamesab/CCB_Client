import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AppService {
  API_KEY = 'b4d7c54e5ab9dd37404a310800da82a2';
  BASE_URL = 'https://api.themoviedb.org/3/';

  constructor(private http: HttpClient) {  }


  public GetDiscoverMovies(page = 1,
                            include_video = false,
                            include_adult = false,
                            sort_by = 'popularity.desc',
                            language = 'en-US'): Observable<DiscoveryModel> {

      return this.http.get<DiscoveryModel>(`${this.BASE_URL}discover/movie?page=${page}&include_video=${include_video}&include_adult=${include_adult}&sort_by=${sort_by}&language=en-US&api_key=${this.API_KEY}`);
  }

  public GetMovieDetails(movie_id): Observable<MovieDetails> {
    return this.http.get<MovieDetails>(`${this.BASE_URL}movie/${movie_id}?api_key=${this.API_KEY}&language=en-US`);
  }

  public SearchMovies(query): Observable<DiscoveryModel> {
    return this.http.get<DiscoveryModel>(`${this.BASE_URL}search/movies?api_key=${this.API_KEY}&query=${query}&language=en-US&page=1&include_adult=false`);
  }

  public GetNowPlaying(): Observable<DiscoveryModel> {
    return this.http.get<DiscoveryModel>(`${this.BASE_URL}movie/now_playing?api_key=${this.API_KEY}&language=en-US&page=1&include_adult=false`);
  }

  public GetTopRated(): Observable<DiscoveryModel> {
    return this.http.get<DiscoveryModel>(`${this.BASE_URL}movie/top_rated?api_key=${this.API_KEY}&language=en-US&page=1&include_adult=false`);
  }

  public GetPopular(): Observable<DiscoveryModel> {
    return this.http.get<DiscoveryModel>(`${this.BASE_URL}movie/popular?api_key=${this.API_KEY}&language=en-US&page=1&include_adult=false`);
  }
}


