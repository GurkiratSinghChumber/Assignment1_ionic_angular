// tab2.page.ts
import { Component, OnInit } from '@angular/core';
import { MessageHandlerService } from '../message-handler.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  receivedData: string = '';

  constructor(private messageHandler: MessageHandlerService) {}

  ngOnInit() {
    this.messageHandler.message.subscribe(data => {
      this.receivedData = data;
    });
  }
}
