import { TypeCon } from "../entities/content.entity";

export class CreateContentDto {
  type: TypeCon;
  title: string;
  description: string;
  relese_date: Date;
  language: string;
  country: string;
  duration_minutes: number;
  maturity_lavel: number;
  is_publish: boolean;
  trailer_url: string;
}
