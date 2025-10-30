import { Module } from '@nestjs/common';
import { SubsciptionService } from './subsciption.service';
import { SubsciptionController } from './subsciption.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Subsciption } from './entities/subsciption.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Subsciption])],
  controllers: [SubsciptionController],
  providers: [SubsciptionService],
})
export class SubsciptionModule {}
