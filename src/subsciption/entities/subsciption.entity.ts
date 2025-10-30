import { Column, CreateDateColumn, Entity, ForeignKey, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Plan } from "../../plans/entities/plan.entity";
import { User } from "../../user/entities/user.entity";

export enum StatusSun {
  active = "active",
  expired = "expired",
  pending = "pending",
  canceled = "canceled"
}

@Entity()
export class Subsciption {
  @PrimaryGeneratedColumn()
  id: number;

  @ForeignKey(() => User)
  @Column()
  userID: number;

  @ForeignKey(() => Plan)
  @Column()
  planID: number;

  @Column({ default: StatusSun.pending })
  status: StatusSun;

  @Column()
  start_date: Date;

  @Column()
  end_date: Date;

  @Column()
  auto_renew: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
