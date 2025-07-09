import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutCompany } from './about-company/about-company';
import { EmployeeComponent } from './employee/employee';

const routes: Routes = [
  { path: 'about-company', component: AboutCompany },
  { path: 'employee', component: EmployeeComponent },
  { path: '', redirectTo: '/about-company', pathMatch: 'full' }, // Редирект по умолчанию на 'about-company'
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

  // { path: '**', redirectTo: '/about-company' } // Обработка несуществующих маршрутов (404)