import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DoseSummaryDataService } from 'src/app/dose-summary-data.service';

@Component({
  selector: 'app-dose-summary',
  templateUrl: './dose-summary.component.html',
  styleUrls: ['./dose-summary.component.scss'],
})
export class DoseSummaryComponent implements OnInit {
  dates!: string[];

  constructor(private dataService:DoseSummaryDataService,private router: Router) { }
  ngOnInit() {
    this.dates = this.dataService.getDates();
  }


  goToDetail(date: string): void {
    this.router.navigate([`/covid-summary`, date]);
  }


}
