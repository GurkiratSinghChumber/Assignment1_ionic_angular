// covid-summary.page.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { DoseSummaryDataService } from '../dose-summary-data.service';
import { MessageHandlerService } from '../message-handler.service';
import { OntarioDosesSummary } from '../ontarioDosesData';

@Component({
  selector: 'app-covid-summary',
  templateUrl: './covid-summary.page.html',
  styleUrls: ['./covid-summary.page.scss'],
})
export class CovidSummaryPage implements OnInit {
  date!: string;
  data!: any;
  summary!: OntarioDosesSummary;
  inputData: string = '';

  constructor(
    private route: ActivatedRoute,
    private doseSummaryDataService: DoseSummaryDataService,
    private messageHandler: MessageHandlerService,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.data = this.route.snapshot.params;
    console.log("my data", this.data);
    this.date = this.data.date;
    this.summary = this.doseSummaryDataService.getSummaryByDate(this.date);
  }

  async sendData() {
    this.messageHandler.setMessage(this.data.date+": "+this.inputData);
    const alert = await this.alertController.create({
      header: 'Success',
      message: 'Data sent',
      buttons: ['OK'],
    });

    await alert.present();
  }
}
