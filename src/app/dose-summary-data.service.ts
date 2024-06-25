import { Injectable } from '@angular/core';
import doseData from '../assets/data/OntarioDosesDatafile.json';
import { OntarioDosesData, OntarioDosesSummary } from './ontarioDosesData';

@Injectable({
  providedIn: 'root'
})
export class DoseSummaryDataService {
  dates: string[] = [];
  private data: OntarioDosesData[] = doseData;
  private report!: OntarioDosesData | undefined;


  constructor() { }

  getDates(): string[] {
    for (let item of this.data) {
      this.dates.push(this.formatDate(item.report_date));
    }
    return this.dates;
  }

   private formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toISOString().split('T')[0];
  }

  getSummaryByDate(date: string): OntarioDosesSummary {
    this.report = this.data.find(r => this.formatDate(r.report_date) === date);

      return {
        report_date: this.formatDate(this.report!.report_date),
        previous_day_total_doses_administered: this.report!.previous_day_total_doses_administered,
        total_doses_administered: this.report!.total_doses_administered,
        total_doses_in_fully_vaccinated_individuals: this.report!.total_doses_in_fully_vaccinated_individuals,
        total_individuals_fully_vaccinated: this.report!.total_individuals_fully_vaccinated
      };


  }

}
