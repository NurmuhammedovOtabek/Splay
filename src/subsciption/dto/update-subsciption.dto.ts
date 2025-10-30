import { PartialType } from '@nestjs/mapped-types';
import { CreateSubsciptionDto } from './create-subsciption.dto';

export class UpdateSubsciptionDto extends PartialType(CreateSubsciptionDto) {}
