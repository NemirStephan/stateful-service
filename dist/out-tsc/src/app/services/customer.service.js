import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { timer, ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpParams } from '@angular/common/http';
let CustomerService = class CustomerService {
    constructor(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:3000/customer/';
        this.interval = timer(0, 1);
    }
    getTime() {
        return this.interval.pipe(map(() => new Date()));
    }
    getRandomNumbers(refresh = false) {
        if (this.randomNumbers == null || refresh) {
            if (this.randomNumbers == null) {
                this.randomNumbers = new ReplaySubject(1);
            }
            this.http
                .get(`${this.baseUrl}randomNumbers`)
                .subscribe(res => this.randomNumbers.next(res));
        }
        return this.randomNumbers;
    }
    getCustomer(customerId) {
        if (this.customer == null) {
            this.customer = new ReplaySubject(1);
            const params = new HttpParams().set('customerId', customerId);
            this.http
                .get(`${this.baseUrl}randomNumbers`, { params })
                .subscribe(res => this.customer.next(res));
        }
        return this.customer;
    }
    setCustomer(value) {
        if (this.customer == null) {
            this.customer = new ReplaySubject(1);
        }
        this.customer.next(value);
    }
};
CustomerService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], CustomerService);
export { CustomerService };
export class ICustomer {
}
//# sourceMappingURL=customer.service.js.map