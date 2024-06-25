import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageHandlerService {
  message = new BehaviorSubject<string>('');
  asObserver = this.message.asObservable();
  constructor() { }

  setMessage(msg: any) {
    this.message.next(msg);
  }
}

