import { Component, OnInit } from '@angular/core';
import { OntarioDataService } from 'src/app/ontario-data.service';
import { OntarioDataSummary } from 'src/app/ontarioDataInterface';
@Component({
  selector: 'app-ontario',
  templateUrl: './ontario.component.html',
  styleUrls: ['./ontario.component.scss'],
})
export class OntarioComponent implements OnInit {
  ontarioSummary!: OntarioDataSummary;

  constructor(private dataService:OntarioDataService) { }

  ngOnInit() {
    this.ontarioSummary = this.dataService.getOntarioSummary();

  }

}
