import { PlansService } from './plans.service';
import { CreatePlanDto } from './dto/create-plan.dto';
import { UpdatePlanDto } from './dto/update-plan.dto';
import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Plan } from './entities/plan.entity';

@Resolver("plans")
export class PlansResolver {
  constructor(private readonly plansService: PlansService) {}

  @Query(() => [Plan])
  findAllPlan() {
    return this.plansService.findAll();
  }

  @Query(() => Plan)
  findOnePlan(@Args("id", { type: () => ID }) id: number) {
    return this.plansService.findOne(+id);
  }

  @Mutation(() => Plan)
  createPlan(@Args("create_Plan") createPlanDto: CreatePlanDto) {
    return this.plansService.create(createPlanDto);
  }
  @Mutation(() => Plan)
  updatePlan(
    @Args("id", { type: () => ID }) id: number,
    @Args("updatePlan") updatePlanDto: UpdatePlanDto
  ) {
    return this.plansService.update(+id, updatePlanDto);
  }

  @Mutation(() => ID)
  remove(@Args("id", { type: () => ID }) id: number) {
    return this.plansService.remove(+id);
  }
}
