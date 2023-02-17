import { PartialType } from '@nestjs/mapped-types';
import { IsOptional, IsString } from 'class-validator';
import { CreateMessageDto } from './create-message.dto';

export class UpdateMessageDto {
  @IsString()
  @IsOptional()
  observation: string;
}
