import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export enum Device_type{
    mobile="mobile",
    pc="pc",
    tv="tv"
}

@Entity()
export class Device {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  profile_id: number;

  @Column({ default: Device_type.mobile })
  device_type: Device_type;

  @Column()
  device_name: string;

  @Column()
  os: string;

  @Column()
  last_seen_at: Date;

  @CreateDateColumn()
  created_date: Date;

  @UpdateDateColumn()
  updated_date: Date;
}
