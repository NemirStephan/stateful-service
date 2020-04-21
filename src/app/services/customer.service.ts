import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BaseService, CacheOptions } from './base.service';
import { ICustomer } from '../model/customer';

@Injectable({
  providedIn: 'root',
})
export class CustomerService extends BaseService {
  constructor(private http: HttpClient) {
    super();
  }

  private baseUrl = 'http://localhost:3000/customer/';

  private;

  public getCustomer(
    customerId: number,
    refresh: boolean = false
  ): Observable<ICustomer> {
    const params = new HttpParams().set('customerId', customerId.toString());
    return this.cacheable(
      this.http.get<ICustomer>(this.baseUrl, { params }),
      new CacheOptions({
        key: 'customers',
        id: customerId,
        refresh,
      })
    );
  }

  public updateCustomer(customer: ICustomer): Observable<ICustomer> {
    const obs = this.http.post<ICustomer>(this.baseUrl, customer).pipe(
      tap((res) => {
        this.updateCachedValue(res, obs, 'customers', customer.id);
      })
    );
    return obs;
  }
}
