import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html'
})
export class NotificationsComponent implements OnInit {

  public notifications: string[] = [];

  constructor(private notificationService: NotificationService) { }

  public ngOnInit() {
    this.notificationService.notifications.subscribe(res => {
      this.notifications.push(res);
    });
  }

  public clear(): void {
    this.notifications = [];
  }
}
