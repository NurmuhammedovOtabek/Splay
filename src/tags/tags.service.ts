import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Tag } from './entities/tag.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TagsService {
  constructor(@InjectRepository(Tag) private readonly tagRepo: Repository<Tag>){}

  create(createTagDto: CreateTagDto) {
    return this.tagRepo.save(createTagDto)
  }

  findAll() {
    return this.tagRepo.find()
  }

  findOne(id: number) {
    return this.tagRepo.findOneBy({id})
  }

  async update(id: number, updateTagDto: UpdateTagDto) {
    const verfy = await this.findOne(id)
    if(!verfy){
      throw new NotFoundException("Bunday id yoq")
    }
    const newT = await this.tagRepo.preload({id, ...updateTagDto})
    return this.tagRepo.save(newT!)
  }

  async remove(id: number) {
    const verfy = await this.findOne(id);
    if (!verfy) {
      throw new NotFoundException("Bunday id yoq");
    }
    await this.tagRepo.delete({id})
    return id
  }
}
