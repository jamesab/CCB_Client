// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';

// Modules
import { AppRoutingModule } from './app-routing.module';
// import { PeopleModule } from './people/people.module';
// import { TvshowsModule } from './tvshows/tvshows.module';
// import { MoviesModule } from './movies/movies.module';
// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { PageNotFoundComponent } from './page-not-found-component/page-not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { CollectionComponent } from './collection/collection.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ProfileCardComponent } from './shared/profile-card/profile-card.component';
//
import { MoviesComponent } from './movies/movies.component';
import { MovieDetailComponent } from './movies/movie-detail/movie-detail.component';
import { TvshowsComponent } from './tvshows/tvshows.component';
import { ShowDetailsComponent } from './tvshows/show-details/show-details.component';
import { PeopleComponent } from './people/people.component';
import { PersonDetailsComponent } from './people/person-details/person-details.component';
//
import { SearchFormComponent } from './shared/search-form/search-form.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PageNotFoundComponent,
    ProfileComponent,
    CollectionComponent,
    FavoriteComponent,
    LoginComponent,
    FooterComponent,
    ProfileCardComponent,
    //
    SearchFormComponent,
    //
    MoviesComponent,
    MovieDetailComponent,
    TvshowsComponent,
    ShowDetailsComponent,
    PeopleComponent,
    PersonDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule,
    FormsModule,
    // PeopleModule,
    // TvshowsModule,
    // MoviesModule
  ],
  exports: [
    HttpClientModule,
    FormsModule
  ],
  providers: [
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
