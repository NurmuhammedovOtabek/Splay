import { Field, ID, ObjectType, registerEnumType } from "@nestjs/graphql";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export enum Video{
    hd="hd",
    sd="sd",
    fhd="fhd",
    uhd="uhd"
}

registerEnumType(Video,{
    name:"video"
})

@ObjectType()
@Entity()
export class Plan {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  title: string;

  @Field()
  @Column()
  price: number;

  @Field()
  @Column()
  currency: string;

  @Field()
  @Column()
  billing_quality: string;

  @Field(()=>Video)
  @Column({ default: Video.hd })
  video_quality: Video;

  @Field()
  @Column()
  max_profiles: number;

  @Field()
  @Column()
  concurrent_streams: number;

  @Field()
  @CreateDateColumn()
  created_at: Date;

  @Field()
  @UpdateDateColumn()
  updated_at: Date;
}
