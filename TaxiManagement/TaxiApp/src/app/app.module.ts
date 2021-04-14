import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DriverDetailsComponent } from './driver-details/driver-details.component';
import { DriverDetailsFormComponent } from './driver-details/driver-details-form/driver-details-form.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { VehicleDetailsFormComponent } from './vehicle-details/vehicle-details-form/vehicle-details-form.component';
import { ReceiptDetailsComponent } from './receipt-details/receipt-details.component';
import { ReceiptDetailsFormComponent } from './receipt-details/receipt-details-form/receipt-details-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{DropDownsModule} from '@progress/kendo-angular-dropdowns';
import { NavigationModule } from '@progress/kendo-angular-navigation';
import { HomeComponent } from './home/home.component';

import { breadCrumbRouting, appRoutingProviders } from './breadCrumbRouting.routes';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { VehicleRegistrationComponent } from './vehicle-registration/vehicle-registration.component';
import { VehicleRegistrationFormComponent } from './vehicle-registration/vehicle-registration-form/vehicle-registration-form.component';
import { VehicleFuelComponent } from './vehicle-fuel/vehicle-fuel.component';




@NgModule({
  declarations: [
    AppComponent,
    DriverDetailsComponent,
    DriverDetailsFormComponent,
    VehicleDetailsComponent,
    VehicleDetailsFormComponent,
    ReceiptDetailsComponent,
    ReceiptDetailsFormComponent,
    HomeComponent,
    VehicleRegistrationComponent,
    VehicleRegistrationFormComponent,
    VehicleFuelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    
    DropDownsModule,
    BrowserAnimationsModule,
    NavigationModule,
    breadCrumbRouting,
    DateInputsModule
    
  ],
  providers: [
    appRoutingProviders,
    {
        provide: APP_BASE_HREF,
        useValue: window.location.pathname
    }
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
