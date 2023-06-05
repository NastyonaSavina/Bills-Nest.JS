import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type BillsDocument = HydratedDocument<Bill>;

@Schema()
export class Bill {
    @Prop({ required: [true, "Choose the company name for the bill"] })
    companyName: string;

    @Prop({ required: [true, "Choose the name of game for the bill"] })
    gameName: string;

    @Prop({ required: [true, "Choose the name of game for the bill"] })
    amount: number;
    
    @Prop({ default: '' })
    billNumber: string;

    @Prop({ enum: ["dollar", "euro"], required: [true, "Choose the currency for the account"]})
    currency: string;

    @Prop({default: false})
    ispaid: boolean;

    @Prop()
    dateOfPayment: Date;
}

export const BillsSchema = SchemaFactory.createForClass(Bill);







// import * as mongoose from 'mongoose';


// export const billsSchema = new mongoose.Schema(
//   {
//     companyName: {
//       type: String,
//       required: [true, "Choose the company name for the bill"],
//     },
//     gameName: {
//       type: String,
//       required: [true, "Choose the name of game for the bill"],
//     },
//     amount: {
//       type: Number,
//       required: [true, "Choose the amount for the bill"],
//     },
//     billNumber: {
//       type: String,
//       default: '',
//     },
//     currency: {
//       type: String,
//       enum: ["dollar", "euro"],
//       required: [true, "Choose the currency for the account"],
//     },
//     ispaid: {
//       type: Boolean,
//       default: false,
//     },
//     dateOfPayment: {
//       type: Date,
//     },
//   },
//   { timestamps: true, versionKey: false }
// );