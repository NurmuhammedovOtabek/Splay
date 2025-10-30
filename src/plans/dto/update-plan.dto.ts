import { PartialType } from '@nestjs/mapped-types';
import { CreatePlanDto } from './create-plan.dto';
import { Field, InputType, registerEnumType } from '@nestjs/graphql';
import { Video } from '../entities/plan.entity';

registerEnumType(Video,{
  name:"Video",
  description: "sfsdfs"
})
@InputType()
export class UpdatePlanDto extends PartialType(CreatePlanDto) {
  @Field({ nullable: true })
  title?: string;

  @Field({ nullable: true })
  price?: number;

  @Field({ nullable: true })
  currency?: string;

  @Field({ nullable: true })
  billing_quality?: string;

  @Field(()=>Video,{ nullable: true })
  video_quality?: Video;

  @Field({ nullable: true })
  max_profiles?: number;

  @Field({ nullable: true })
  concurrent_streams?: number;
}
