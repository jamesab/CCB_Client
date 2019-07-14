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

//#region Movies:
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

  public GetMovieCast(movie_id): Observable<MovieCastAndCrew> {
    return this.http.get<MovieCastAndCrew>(`${this.BASE_URL}movie/${movie_id}/credits?api_key=${this.API_KEY}`);
  }
  //#endregion

//#region People:

public GetPopularPeople(page = 1): Observable<PopularPeople> {
  return this.http.get<PopularPeople>(`${this.BASE_URL}person/popular?api_key=${this.API_KEY}&language=en-US&page=${page}`);
}

public GetPerson(person_id): Observable<PersonDetails> {
  return this.http.get<PersonDetails>(`${this.BASE_URL}person/${person_id}?api_key=${this.API_KEY}&language=en-US`);
}

//#endregion

//#region TV SHOWS

public GetPopularTvShows(page = 1): Observable<TvShowsModel> {
    return this.http.get<TvShowsModel>(`${this.BASE_URL}tv/popular?api_key=${this.API_KEY}&language=en-US&page=${page}`);
  }


public GetShowDetails(tv_id): Observable<ShowDetail> {
  return this.http.get<ShowDetail>(`${this.BASE_URL}tv/${tv_id}?api_key=${this.API_KEY}&language=en-US`);
}


  //#endregion

}
