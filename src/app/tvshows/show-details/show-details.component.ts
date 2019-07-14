import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
//
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css']
})
export class ShowDetailsComponent implements OnInit {

  show: ShowDetail;

  constructor(private AppService: AppService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');

    this.AppService.GetShowDetails(id).subscribe(data => {
      this.show = data;
    },
    error => {
      this.router.navigate(['**']);
    });
  }

}
