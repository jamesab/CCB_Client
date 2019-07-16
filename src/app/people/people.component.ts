import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  isSearching = false;
  searchTerm = '';
  peoples: PopularPeople;

  constructor(private AppService: AppService) { }

  ngOnInit() {
      this.AppService.GetPopularPeople().subscribe(data => {
        this.peoples = data;
    });
  }

  search(form) {
    this.searchTerm = form.value.search;
    if (this.searchTerm !== '') {
        this.AppService.SearchPeople(form.value.search).subscribe(data => {
          this.peoples = data;
          this.isSearching = true;
      });
    } else {
      this.AppService.GetPopularPeople().subscribe(data => {
        this.peoples = data;
        this.isSearching = false;
      });
    }
}

  Next(currentPage) {
    const page = currentPage + 1;
    if (this.isSearching) {
      this.AppService.SearchPeople(this.searchTerm, page).subscribe(data => {
        this.peoples = data;
        this.isSearching = true;
    });
    } else {
      this.AppService.GetPopularPeople(page).subscribe(data => {
        this.peoples = data;
      });
    }
  }

  Previous(currentPage) {
    let page = 1;
    if (currentPage > 1) {
      page = currentPage - 1;
    }
    if (this.isSearching) {
      this.AppService.SearchPeople(this.searchTerm, page).subscribe(data => {
        this.peoples = data;
        this.isSearching = true;
      });
    } else {
      this.AppService.GetPopularPeople(page).subscribe(data => {
        this.peoples = data;
        this.isSearching = false;
      });
    }
  }

}
