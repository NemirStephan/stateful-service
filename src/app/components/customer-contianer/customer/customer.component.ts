import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
})
export class CustomerComponent implements OnChanges {
  constructor(
    private fb: FormBuilder,
    private customerService: CustomerService
  ) {}

  @Input() componentId: number;
  @Input() customerId: number;
  @Output() removeComponent: EventEmitter<number> = new EventEmitter();

  customerForm = this.fb.group({
    id: [''],
    name: [''],
    lastRefreshed: [''],
  });

  ngOnChanges() {
    this.getCustomer();
  }

  public updateCustomer() {
    this.customerService
      .updateCustomer({
        id: this.customerForm.controls.id.value,
        name: this.customerForm.controls.name.value,
        lastRefreshed: this.customerForm.controls.lastRefreshed.value,
      })
      .subscribe();
  }

  public getCustomer(refresh: boolean = false) {
    this.customerService
      .getCustomer(this.customerId, refresh)
      .subscribe((customer) => {
        this.customerForm.controls.id.setValue(customer.id);
        this.customerForm.controls.name.setValue(customer.name);
        this.customerForm.controls.lastRefreshed.setValue(
          customer.lastRefreshed
        );
      });
  }

  public refreshCustomer() {
    this.getCustomer(true);
  }

  public remove() {
    this.removeComponent.emit(this.componentId);
  }
}
