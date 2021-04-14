import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DriverDetailsComponent } from './driver-details/driver-details.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { ReceiptDetailsComponent } from './receipt-details/receipt-details.component';
import { HomeComponent } from './home/home.component';
import { VehicleRegistrationComponent } from './vehicle-registration/vehicle-registration.component';
import { VehicleFuelComponent } from './vehicle-fuel/vehicle-fuel.component';

export const breadCrumbRoutes: Routes = [
    {
        path:'drivers',
        component:DriverDetailsComponent
      },
      {
        path:'',
        component:HomeComponent
      },{
      path: 'home',
      redirectTo: ''
      },
      {
        path:'vehicles',
        component:VehicleDetailsComponent
      },
      {
        path:'drivers/vehicles/receipts',
        component:ReceiptDetailsComponent
      },
      {
        path:'vehicles/vehicleRegistration',
        component:VehicleRegistrationComponent
      },
      {
        path:'vehicles/vehicleFuel',
        component:VehicleFuelComponent
      }
     
    
];

export const appRoutingProviders: any[] = [];

export const breadCrumbRouting: ModuleWithProviders<any> = RouterModule.forRoot(breadCrumbRoutes);