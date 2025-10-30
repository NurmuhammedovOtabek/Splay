import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePlanDto } from './dto/create-plan.dto';
import { UpdatePlanDto } from './dto/update-plan.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Plan } from './entities/plan.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PlansService {
  constructor(@InjectRepository(Plan) private readonly palnRepo: Repository<Plan>){}

  async create(createPlanDto: CreatePlanDto) {
    const newP = await this.palnRepo.save(createPlanDto)
    return newP 
  }

  findAll() {
    return this.palnRepo.find()
  }

  findOne(id: number) {
    return this.palnRepo.findOneBy({id})
  }

  async update(id: number, updatePlanDto: UpdatePlanDto) {
    const verfy = await this.findOne(id)
    if(!verfy){
      throw new NotFoundException("Bunday paln yoq")
    }
    const newP = await this.palnRepo.preload({id, ...updatePlanDto})
    return this.palnRepo.save(newP!)
  }

  async remove(id: number) {
    const verfy = await this.findOne(id);
    if (!verfy) {
      throw new NotFoundException("Bunday paln yoq");
    }
    await this.palnRepo.delete({id})
    return id
  }
}
