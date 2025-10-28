import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

export enum roleAdmin {
  superadmin = "superadmin",
  modeator = "modeator",
}

@Entity()
export class Admin {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  full_name: string;

  @Column()
  token: string;

  @Column({default:roleAdmin.modeator})
  role: roleAdmin;

  @Column({ default: false })
  is_creator: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
