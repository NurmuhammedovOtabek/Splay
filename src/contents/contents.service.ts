import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateContentDto } from './dto/create-content.dto';
import { UpdateContentDto } from './dto/update-content.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Content } from './entities/content.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ContentsService {
  constructor(@InjectRepository(Content) private readonly conRepo: Repository<Content>){}

  create(createContentDto: CreateContentDto) {
    return this.conRepo.save(createContentDto)
  }

  findAll() {
    return this.conRepo.find()
  }

  findOne(id: number) {
    return this.conRepo.findOneBy({id})
  }

 async update(id: number, updateContentDto: UpdateContentDto) {
    const verfy = await this.findOne(id)
    if(!verfy){
      throw new NotFoundException("Bunday id yoq")
    }
    const newC = await this.conRepo.preload({id,...updateContentDto})
    return this.conRepo.save(newC!)
  }

  async remove(id: number) {
    const verfy = await this.findOne(id);
    if (!verfy) {
      throw new NotFoundException("Bunday id yoq");
    }
    await this.conRepo.delete({id})
    return id
  }
}
