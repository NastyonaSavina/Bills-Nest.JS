import { Injectable } from "@nestjs/common";

@Injectable({})
export class BillsService{

    getListBills() {
        return 'I use service'
    }
    updateStatusBill() { }
    addBill(){}
}