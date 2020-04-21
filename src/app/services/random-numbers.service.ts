import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BaseService, CacheOptions } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class RandomNumbersService extends BaseService {
  constructor(private http: HttpClient) {
    super();
  }

  private readonly url = 'http://localhost:3000/customer/random-numbers';

  /**
   * 1. Standard service: No state
   */
  // public getRandomNumbers(refresh: boolean = false): Observable<number[]> {
  //   return this.http.get<number[]>(this.url);
  // }

  /**
   * 2. Stateful service: Replay subjects
   */
  // private randomNumbers: ReplaySubject<number[]>;
  // public getRandomNumbers(refresh: boolean = false): Observable<number[]> {
  //   if (this.randomNumbers == null || refresh) {
  //     this.randomNumbers = this.randomNumbers == null ? new ReplaySubject<number[]>(1) : this.randomNumbers;
  //     this.http.get<number[]>(this.url).subscribe(res => this.randomNumbers.next(res));
  //   }
  //   return this.randomNumbers;
  // }

  /**
   * 2. Stateful service: cacheable
   */
  public getRandomNumbers(refresh: boolean = false): Observable<number[]> {
    const options = new CacheOptions({
      key: 'random-numbers',
      refresh,
      lifespan: 3,
      // autoRefresh: true
    });

    return this.cacheable(this.http.get<number[]>(this.url), options);
  }
}
