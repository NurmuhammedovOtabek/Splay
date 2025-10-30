import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Profile } from './entities/profile.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProfilesService {
  constructor(@InjectRepository(Profile) private readonly proRepo: Repository<Profile>){}

  create(createProfileDto: CreateProfileDto) {
    return this.proRepo.save(createProfileDto)
  }

  findAll() {
    return this.proRepo.find()
  }

  findOne(id: number) {
    return this.proRepo.findOneBy({id})
  }

  async update(id: number, updateProfileDto: UpdateProfileDto) {
    const verfy = await this.findOne(id)
    if(!verfy){
      throw new NotFoundException("Bunday id yoq")
    }
    const nweP = await this.proRepo.preload({id, ...updateProfileDto})
    return this.proRepo.save(nweP!)
  }

  async remove(id: number) {
    const verfy = await this.findOne(id);
    if (!verfy) {
      throw new NotFoundException("Bunday id yoq");
    }
    await this.proRepo.delete({id})
    return id
  }
}
