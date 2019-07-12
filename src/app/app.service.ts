import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
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
                            language = 'en-US'): Observable<any> {

      return this.http.get(`${this.BASE_URL}discover/movie?page=${page}&include_video=${include_video}&include_adult=${include_adult}&sort_by=${sort_by}&language=en-US&api_key=${this.API_KEY}`);
  }



}
