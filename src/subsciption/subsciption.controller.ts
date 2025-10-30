import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SubsciptionService } from './subsciption.service';
import { CreateSubsciptionDto } from './dto/create-subsciption.dto';
import { UpdateSubsciptionDto } from './dto/update-subsciption.dto';

@Controller('subsciption')
export class SubsciptionController {
  constructor(private readonly subsciptionService: SubsciptionService) {}

  @Post()
  create(@Body() createSubsciptionDto: CreateSubsciptionDto) {
    return this.subsciptionService.create(createSubsciptionDto);
  }

  @Get()
  findAll() {
    return this.subsciptionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.subsciptionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSubsciptionDto: UpdateSubsciptionDto) {
    return this.subsciptionService.update(+id, updateSubsciptionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.subsciptionService.remove(+id);
  }
}
