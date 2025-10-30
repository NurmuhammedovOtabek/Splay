import { StatusSun } from "../entities/subsciption.entity";

export class CreateSubsciptionDto {
  userID: number;

  planID: number;

  status: StatusSun;

  start_date: Date;

  end_date: Date;

  auto_renew: boolean;
}
