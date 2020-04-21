import { Component, OnInit } from '@angular/core';
import { IComponentProps } from 'src/app/model/component-props';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-random-numbers-container',
  templateUrl: './random-numbers-container.component.html'
})
export class RandomNumbersContainerComponent implements OnInit {

  private nextId = 1;

  public components: IComponentProps[] = new Array<IComponentProps>();
  public notifications: string[] = [];

  constructor(private notificationService: NotificationService) {
    this.components.push({
      componentId: this.getNextId()
    });
    this.components.push({
      componentId: this.getNextId()
    });
    this.components.push({
      componentId: this.getNextId()
    });
  }

  public ngOnInit() {
    this.notificationService.notifications.subscribe(res => {
      this.notifications.push(res);
    });
  }

  public add() {
    this.components.push({
      componentId: this.getNextId(),
    });
  }

  public clear(): void {
    this.notifications = [];
  }

  public remove(componentId: number) {
    const index = this.components.findIndex(c => c.componentId === componentId);
    if (index > -1) {
      this.components.splice(index, 1);
    }
  }

  private getNextId(): number {
    const result = this.nextId;
    this.nextId++;
    return result;
  }
}
