import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { BillsModule } from './bills/bills.module';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URL,{
    dbName: "db-bills",
  }),
    BillsModule],
})
export class AppModule {}
