import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CovidSummaryPage } from './covid-summary.page';

describe('CovidSummaryPage', () => {
  let component: CovidSummaryPage;
  let fixture: ComponentFixture<CovidSummaryPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidSummaryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
