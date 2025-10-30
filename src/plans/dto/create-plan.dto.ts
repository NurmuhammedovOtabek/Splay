import { Field, InputType, registerEnumType } from "@nestjs/graphql";
import { Video } from "../entities/plan.entity";

registerEnumType(Video,{
  name:"Video",
  description: "sfsdfs"
})

@InputType()
export class CreatePlanDto {
  @Field()
  title: string;

  @Field()
  price: number;

  @Field()
  currency: string;

  @Field()
  billing_quality: string;

  @Field(()=>Video)
  video_quality: Video;

  @Field()
  max_profiles: number;

  @Field()
  concurrent_streams: number;
}
