import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RouterExampleEmployeeDetailsComponent } from './router-example-employee-details/router-example-employee-details.component';
import { RouterExampleEmployeeComponent } from './router-example-employee/router-example-employee.component';

const routes: Routes = [
  { path :  "", component: HomeComponent },
  { path :  "Emps", component: RouterExampleEmployeeComponent },
  { path : "Details/:id", component: RouterExampleEmployeeDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 