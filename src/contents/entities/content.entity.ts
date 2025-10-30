import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export enum TypeCon{
    movie="movir",
    series="series"
}

@Entity()
export class Content {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: TypeCon;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  relese_date: Date;

  @Column()
  language: string;

  @Column()
  country: string;

  @Column()
  duration_minutes: number;

  @Column()
  maturity_lavel: number;

  @Column()
  is_publish: boolean;

  @Column()
  trailer_url: string;

  @CreateDateColumn()
  create_date: Date;

  @UpdateDateColumn()
  update_date: Date;
}
