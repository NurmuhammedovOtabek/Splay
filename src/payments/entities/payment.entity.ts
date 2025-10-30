import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export enum amountPay{
    usd="usd",
    uzs="uzs",
    rub="rub"
}

@Entity()
export class Payment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userID: number;

  @Column()
  subsckiptionId: number;

  @Column()
  provid: string;

  @Column()
  transction_id: string;

  @Column({default:amountPay.usd})
  amount: amountPay;

  @Column()
  status:string

  @Column()
  currency: number;

  @CreateDateColumn()
  created_date: Date;

  @UpdateDateColumn()
  updated_date: Date;
}
