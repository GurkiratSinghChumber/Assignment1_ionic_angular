export interface OntarioDosesData {
  _id: number;
  report_date: string;
  previous_day_total_doses_administered: number;
  previous_day_at_least_one: number;
  previous_day_fully_vaccinated: number;
  previous_day_3doses: number;
  total_doses_administered: number;
  total_individuals_at_least_one: number;
  total_individuals_partially_vaccinated: number;
  total_doses_in_fully_vaccinated_individuals: number;
  total_individuals_fully_vaccinated: number;
  total_individuals_3doses: number;
}

export interface OntarioDosesSummary {
  report_date: string;
  previous_day_total_doses_administered: number;
  total_doses_administered: number;
  total_doses_in_fully_vaccinated_individuals: number;
  total_individuals_fully_vaccinated: number;
}
