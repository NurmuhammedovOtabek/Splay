import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import  bcrypt  from "bcrypt"

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private readonly userRepo: Repository<User>){}

  async create(createUserDto: CreateUserDto) {
    const verify = await this.userRepo.findOneBy({email: createUserDto.email})
    if(verify){
      throw new ConflictException("Bunday email bor")
    }
    const verify2 = await this.userRepo.findOneBy({
      phone: createUserDto.phone,
    });
    if (verify2) {
      throw new ConflictException("Bunday telefon bor");
    }
    createUserDto.password = await bcrypt.hash(createUserDto.password, 7)
    const createUser = await this.userRepo.save(createUserDto)
    return createUser
  }

  findAll() {
    return this.userRepo.find();
  }

  findOne(id: number) {
    return this.userRepo.findOneBy({id})
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.findOne(id)
    if(!user){
      throw new NotFoundException("User topilmadi")
    }
    if(user.phone !== updateUserDto.phone){
       const verify2 = await this.userRepo.findOneBy({
         phone: updateUserDto.phone,
       });
       if (verify2) {
         throw new ConflictException("Bunday telefon bor");
       }
    }
    const veerfyPass = await bcrypt.compare(updateUserDto.password!, user.password)
    if(!veerfyPass){
      updateUserDto.password = await bcrypt.hash(updateUserDto.password!, 7);
    }
    const newuser = await this.userRepo.preload({id, ...updateUserDto})
    return this.userRepo.save(newuser!)

  }

  async remove(id: number) {
    const verify = await this.findOne(id)
    if(!verify){
      throw new NotFoundException("User topilmadi");
    }
    await this.userRepo.delete({id})
    return id
  }
}
