import { Module } from '@nestjs/common';
import { PlansService } from './plans.service';
import { PlansController } from './plans.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Plan } from './entities/plan.entity';
import { PlansResolver } from './plans.resolver';

@Module({
  imports:[TypeOrmModule.forFeature([Plan])],
  controllers: [PlansController],
  providers: [PlansService, PlansResolver],
})
export class PlansModule {}
