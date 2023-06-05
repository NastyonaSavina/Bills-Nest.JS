import { Module } from "@nestjs/common";
import { BillsController } from "./bills.controller";
import { BillsService } from "./bills.service";
import { MongooseModule } from '@nestjs/mongoose';
import { Bill, BillsSchema } from "./schemas/bills.schema";


@Module({
    imports: [MongooseModule.forFeature([{ name: Bill.name, schema: BillsSchema}])],

    controllers: [BillsController],
    providers:[BillsService]
})
export class BillsModule{}