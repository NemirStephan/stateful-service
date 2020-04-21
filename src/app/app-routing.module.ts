import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerContianerComponent } from './components/customer-contianer/customer-contianer.component';
import { RandomNumbersContainerComponent } from './components/random-numbers-container/random-numbers-container.component';

const routes: Routes = [
  {
    path: 'random-numbers',
    component: RandomNumbersContainerComponent
  },
  {
    path: 'customers',
    component: CustomerContianerComponent
  },
  {
    path: '',
    redirectTo: 'random-numbers',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

