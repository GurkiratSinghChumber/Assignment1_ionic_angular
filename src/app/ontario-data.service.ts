import { Injectable } from '@angular/core';
import reportData from '../assets/data/ontarioData.json';
import { OntarioDataSummary, OntarioReport } from './ontarioDataInterface';

@Injectable({
  providedIn: 'root'
})
export class OntarioDataService {
  private data: OntarioReport[] = reportData;

  constructor() {

  }

  getOntarioData(): OntarioReport[] {
    return this.data;
  }

  getOntarioSummary(): OntarioDataSummary {
      let totalCases = 0;
    let resolved = 0;
    let deaths = 0;
    let confirmedPositive = 0;
    let patientsInICUVentilator = 0;

    for (let report of this.data) {
      totalCases += report.total_cases;
      resolved += report.resolved;
      deaths += report.deaths;
      confirmedPositive += report.confirmed_positive;
      patientsInICUVentilator += report.number_of_patients_in_icu + report.number_of_patients_on_a_ventilator;
    }


    return {
      totalCases,
      resolved,
      deaths,
      confirmedPositive,
      patientsInICUVentilator
    };
  }

}
