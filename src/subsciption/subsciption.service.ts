import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateSubsciptionDto } from './dto/create-subsciption.dto';
import { UpdateSubsciptionDto } from './dto/update-subsciption.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Subsciption } from './entities/subsciption.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SubsciptionService {
  constructor(@InjectRepository(Subsciption) private readonly subRepo: Repository<Subsciption>){}

  async create(createSubsciptionDto: CreateSubsciptionDto) {
    const newSub = await this.subRepo.save(createSubsciptionDto)
    return newSub
  }

  findAll() {
    return this.subRepo.find()
  }

  findOne(id: number) {
    return this.subRepo.findOneBy({id})
  }

  async update(id: number, updateSubsciptionDto: UpdateSubsciptionDto) {
    const verfy = await this.findOne(id)
    if(!verfy){
      throw new NotFoundException("Bunday id yoq")
    }
    const newS = await this.subRepo.preload({id, ...updateSubsciptionDto})
    if(!newS){
      throw new BadRequestException("Malumot hato")
    }
    return this.subRepo.save(newS)
  }

  async remove(id: number) {
    const verfy = await this.findOne(id);
    if (!verfy) {
      throw new NotFoundException("Bunday id yoq");
    }
    await this.subRepo.delete({id})
    return id
  }
}
