export interface CovidRecord {
  pruid: number;
  prname: string;
  prnameFR: string;
  date: string;
  reporting_week: number;
  reporting_year: number;
  update: number;
  totalcases: number;
  numtotal_last7: string;
  ratecases_total: string;
  numdeaths: number;
  numdeaths_last7: number;
  ratedeaths: number;
  ratecases_last7: string;
  ratedeaths_last7: number;
  numtotal_last14: string;
  numdeaths_last14: number;
  ratetotal_last14: string;
  ratedeaths_last14: number;
  avgcases_last7: string;
  avgincidence_last7: string;
  avgdeaths_last7: number;
  avgratedeaths_last7: number;
}

export interface CovidSummary {
  totalCases: number;
  totalDeaths: number;
  averageDeathRate: number;
  rateOfCases: number;
}
