import { amountPay } from "../entities/payment.entity";

export class CreatePaymentDto {
  userID: number;

  subsckiptionId: number;

  provid: string;

  transction_id: string;

  amount: amountPay;

  status: string;

  currency: number;
}
