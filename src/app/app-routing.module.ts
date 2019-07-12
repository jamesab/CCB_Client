// Angular
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Components
import { MoviesComponent } from './movies/movies.component';
import { MovieDetailComponent } from './movies/movie-detail/movie-detail.component';
import { PageNotFoundComponent } from './page-not-found-component/page-not-found.component';
import { CollectionComponent } from './collection/collection.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { LoginComponent } from './login/login.component';
import { PeopleComponent } from './people/people.component';
import { ProfileComponent } from './profile/profile.component';
import { TvshowsComponent } from './tvshows/tvshows.component';


const routes: Routes = [
  { path: 'tvshows', component: TvshowsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'people', component: PeopleComponent },
  { path: 'login', component: LoginComponent },
  { path: 'favorite', component: FavoriteComponent },
  { path: 'collection', component: CollectionComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'movies/:id', component: MovieDetailComponent },
  { path: '',
    redirectTo: '/movies',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
