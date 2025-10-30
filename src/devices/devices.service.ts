import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDeviceDto } from './dto/create-device.dto';
import { UpdateDeviceDto } from './dto/update-device.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Device } from './entities/device.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DevicesService {
  constructor(@InjectRepository(Device) private readonly devRepo: Repository<Device>){}

  create(createDeviceDto: CreateDeviceDto) {
    return this.devRepo.save(createDeviceDto)
  }

  findAll() {
    return this.devRepo.find()
  }

  findOne(id: number) {
    return this.devRepo.findOneBy({id})
  }

  async update(id: number, updateDeviceDto: UpdateDeviceDto) {
    const verfy = await this.findOne(id)
    if(!verfy){
      throw new NotFoundException("Bunday id yoq")
    }
    const newD = await this.devRepo.preload({id, ...updateDeviceDto})
    return this.devRepo.save(newD!)
  }

  async remove(id: number) {
    const verfy = this.findOne(id);
    if (!verfy) {
      throw new NotFoundException("Bunday id yoq");
    }
    await this.devRepo.delete({id})
    return id
  }
}
