import { Injectable } from '@angular/core';
import * as covidData from '../assets/data/covid19-download (1).json';
import { CovidRecord, CovidSummary } from './covidDataInterface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private data: CovidRecord[] = covidData;

  constructor() {}

  getCovidData(): CovidRecord[] {
    return this.data;
  }

  getCovidSummary(): CovidSummary {

    let totalCases = 0;
    let totalDeaths = 0;
    let totalDeathRate = 0;
    let rateOfCases = 0;
    let counter = 0;

    for (let i = 0; i < this.data.length; i++) {
      totalCases < this.data[i].totalcases ? totalCases = this.data[i].totalcases: totalCases;
      totalDeaths < this.data[i].numdeaths ? totalDeaths = this.data[i].numdeaths: totalDeaths;
      totalDeathRate += this.data[i].ratedeaths;
      rateOfCases += Number(this.data[i].ratecases_total);
      counter++;
    }


    const avgDeathRate = totalDeathRate/counter;


    // Calculate rateOfCases
    const avgRateOfCases = rateOfCases/counter;
    const roundedRateOfCases = +avgRateOfCases.toFixed(2);

    return {
      totalCases,
      totalDeaths,
      averageDeathRate: +avgDeathRate.toFixed(2),
      rateOfCases: roundedRateOfCases
    };
  }
}
