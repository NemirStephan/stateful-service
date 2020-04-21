import { Injectable } from '@angular/core';
import { Subject, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  public notifications: Subject<string>;

  constructor() {
    this.notifications = new Subject<string>();
   }

  public notify(value: string): void {
    this.notifications.next(value);
  }
}
