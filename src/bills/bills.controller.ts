import { Controller, Get, Patch, Post } from "@nestjs/common";
import { BillsService } from "./bills.service";

@Controller('/api/bills')
export class BillsController{
    constructor(private billsServive: BillsService) { }
    
    @Get()
    getListBills() {
        return this.billsServive.getListBills()
    }
    
    @Patch('/:billId/paid')
    updateStatusBill() {}
    
    @Post()
    addBill() {}
}