import { Driver } from "./driver.model";
import { Vehicle } from "./vehicle.model";

export class Receipt{
    receiptId:number;
    vehicleId:number;
    vehicle:Vehicle;
    driverId:number;
    driver:Driver;
    total:number;
    date:Date=new Date();
    advancePayment:number;
}