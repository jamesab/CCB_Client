import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  peoples: PopularPeople;
  constructor(private AppService: AppService) { }

  ngOnInit() {
      this.AppService.GetPopularPeople().subscribe(data => {
        this.peoples = data;
    });
  }

  search(form) {
    this.AppService.SearchMovies(form.value.search).subscribe(data => {
      this.peoples = data;
  });
}

  Next(currentPage) {
    const page = currentPage + 1;
    this.AppService.GetPopularPeople(page).subscribe(data => {
      this.peoples = data;
  });
  }

  Previous(currentPage) {
    let page = 1;
    if (currentPage > 1) {
      page = currentPage - 1;
    }
    this.AppService.GetPopularPeople(page).subscribe(data => {
      this.peoples = data;
  });
  }

}
