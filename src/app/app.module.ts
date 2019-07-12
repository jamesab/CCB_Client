// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
// Modules
import { AppRoutingModule } from './app-routing.module';
// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieDetailComponent } from './movies/movie-detail/movie-detail.component';
import { PageNotFoundComponent } from './page-not-found-component/page-not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { CollectionComponent } from './collection/collection.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { LoginComponent } from './login/login.component';
import { PeopleComponent } from './people/people.component';
import { TvshowsComponent } from './tvshows/tvshows.component';


@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    NavbarComponent,
    MovieDetailComponent,
    PageNotFoundComponent,
    ProfileComponent,
    CollectionComponent,
    FavoriteComponent,
    LoginComponent,
    PeopleComponent,
    TvshowsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  exports:[
    HttpClientModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
