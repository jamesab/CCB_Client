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


@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    NavbarComponent
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
