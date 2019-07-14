import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
//
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css']
})
export class PersonDetailsComponent implements OnInit {

  person: PersonDetails;

  constructor(private AppService: AppService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');

    this.AppService.GetPerson(id).subscribe(data => {
      this.person = data;
    },
    error => {
      this.router.navigate(['**']);
    });

  }

}
