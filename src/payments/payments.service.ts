import { Injectable, NotFoundException } from "@nestjs/common";
import { CreatePaymentDto } from "./dto/create-payment.dto";
import { UpdatePaymentDto } from "./dto/update-payment.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Payment } from "./entities/payment.entity";
import { Repository } from "typeorm";

@Injectable()
export class PaymentsService {
  constructor(
    @InjectRepository(Payment) private readonly payRepo: Repository<Payment>
  ) {}

  async create(createPaymentDto: CreatePaymentDto) {
    const newP = await this.payRepo.save(createPaymentDto);
    return newP;
  }

  findAll() {
    return this.payRepo.find();
  }

  findOne(id: number) {
    return this.payRepo.findOneBy({ id });
  }

  async update(id: number, updatePaymentDto: UpdatePaymentDto) {
    const verfy = await this.findOne(id);
    if (!verfy) {
      throw new NotFoundException("Bunday id yoq");
    }
    const newP = await this.payRepo.preload({ id, ...updatePaymentDto });
    return newP;
  }

  async remove(id: number) {
    const verfy = await this.findOne(id);
    if (!verfy) {
      throw new NotFoundException("Bunday id yoq");
    }
    await this.payRepo.delete({id})
    return id
  }
}
