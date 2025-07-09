import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { AppRoutingModule } from './app-routing-module';
import { FormsModule } from '@angular/forms';
import { BsModalService, ModalModule } from "ngx-bootstrap/modal";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { App } from './app';
import { EmployeeComponent } from './employee/employee';
import { AboutCompany } from './about-company/about-company';
import { EmployeeModalComponent } from './employee-modal/employee-modal';
//import { EmployeeModal } from './employee-modal/employee-modal';

@NgModule({
  declarations: [
    App,
    EmployeeComponent,
    EmployeeModalComponent,
    AboutCompany
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    FormsModule,
    NgbModule
  ],
  providers: [
    provideHttpClient(withFetch()),
    BsModalService,
    provideBrowserGlobalErrorListeners(),
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [App]
})
export class AppModule { }
