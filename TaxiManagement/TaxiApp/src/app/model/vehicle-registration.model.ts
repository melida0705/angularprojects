import { Vehicle } from "./vehicle.model";

export class VehicleRegistration{
     registrationId:number;
     vehicleId:number;
     vehicle:Vehicle;
     lastRegistrationDate:Date=new Date();
     nextRegistrationDate:Date;
     nextRegistrationDaysLeft:number;
     price:number;
}