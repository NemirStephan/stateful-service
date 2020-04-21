import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RandomNumbersService } from 'src/app/services/random-numbers.service';
@Component({
  selector: 'app-random-numbers',
  templateUrl: './random-numbers.component.html'
})
export class RandomNumbersComponent implements OnInit {
  @Input() componentId: number;
  @Output() removeComponent: EventEmitter<number> = new EventEmitter();

  public randomNumbers$: Observable<number[]>;

  constructor(private randomNumbersService: RandomNumbersService) {}

  ngOnInit() {
    this.randomNumbers$ = this.randomNumbersService.getRandomNumbers();
  }

  public remove() {
    this.removeComponent.emit(this.componentId);
  }

  public refresh() {
    this.randomNumbers$ = this.randomNumbersService.getRandomNumbers(true);
  }
}
