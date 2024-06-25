export interface OntarioDataSummary {
  totalCases: number;
  resolved: number;
  deaths: number;
  confirmedPositive: number;
  patientsInICUVentilator: number;
}

export interface OntarioReport{
  id: number;
  date: string;
  confirmed_negative: number;
  presumptiv_negative: number;
  presumptive_positive: number;
  confirmed_positive: number;
  resolved: number;
  deaths: number;
  deaths_new_methodology: number;
  total_cases: number;
  total_patients_approved_for_testing_as_of_reporting_date: number;
  total_tests_completed_in_the_last_day: number;
  percent_positive_tests_in_last_day: number;
  under_investigation: number;
  number_of_patients_hospitalized: number;
  number_of_patients_in_icu: number;
  number_of_patients_on_a_ventilator: number;
  deaths_data_cleaning: number;
  newly_reported_deaths: number;
}
