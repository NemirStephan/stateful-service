import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
let CustomerComponent = class CustomerComponent {
    constructor(fb, customerService) {
        this.fb = fb;
        this.customerService = customerService;
        this.isTimeSubscribed = false;
        this.customerForm = this.fb.group({
            id: [''],
            name: ['']
        });
    }
    ngOnInit() {
        this.randomNumbers$ = this.customerService.getRandomNumbers();
    }
    ngOnChanges() {
        this.customerService.getCustomer(this.customerId);
    }
    toggleTimeSubscribe() {
        if (this.isTimeSubscribed) {
            this.time$.unsubscribe();
            this.isTimeSubscribed = false;
        }
        else {
            this.time$ = this.customerService.getTime().subscribe(t => this.time = t);
            this.isTimeSubscribed = true;
        }
    }
    refreshRandomNumbers() {
        this.customerService.getRandomNumbers(true).subscribe();
    }
    setCustomer() {
        this.customerService.setCustomer({
            id: this.customerForm.controls.id.value,
            name: this.customerForm.controls.name.value,
            dateRetrieved: new Date()
        });
    }
    ngOnDestroy() {
        if (this.time$) {
            this.time$.unsubscribe();
        }
    }
};
tslib_1.__decorate([
    Input()
], CustomerComponent.prototype, "customerId", void 0);
CustomerComponent = tslib_1.__decorate([
    Component({
        selector: 'app-customer',
        templateUrl: './customer.component.html',
        styleUrls: ['./customer.component.css']
    })
], CustomerComponent);
export { CustomerComponent };
//# sourceMappingURL=customer.component.js.map