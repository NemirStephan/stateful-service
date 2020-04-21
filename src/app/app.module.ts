import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CanopyModule } from '@canopy-collective/canopy';
import { AppComponent } from './app.component';
import { CustomerComponent } from './components/customer-contianer/customer/customer.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NotificationInterceptor } from './interceptors/notification-interceptor';
import { LabelControlDirective } from './directives/label-control.directive';
import { CustomerContianerComponent } from './components/customer-contianer/customer-contianer.component';
import { AppRoutingModule } from './app-routing.module';
import { RandomNumbersContainerComponent } from './components/random-numbers-container/random-numbers-container.component';
import { RandomNumbersComponent } from './components/random-numbers-container/random-numbers/random-numbers.component';
import { NotificationsComponent } from './components/notifications/notifications.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    LabelControlDirective,
    CustomerContianerComponent,
    RandomNumbersContainerComponent,
    RandomNumbersComponent,
    NotificationsComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ReactiveFormsModule,
    CanopyModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: NotificationInterceptor,
      multi: true
    },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
