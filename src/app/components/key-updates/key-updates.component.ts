import { Component, OnInit } from '@angular/core';
import { CovidSummary } from 'src/app/covidDataInterface';
import { DataService } from 'src/app/data.service';


@Component({
  selector: 'app-key-updates',
  templateUrl: './key-updates.component.html',
  styleUrls: ['./key-updates.component.scss'],
})
export class KeyUpdatesComponent  implements OnInit {

  covidSummary!: CovidSummary;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.covidSummary = this.dataService.getCovidSummary();
  }

}
