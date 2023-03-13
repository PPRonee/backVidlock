import { PartialType } from '@nestjs/mapped-types';
import {
  IsArray,
  IsEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { CreateProduitDto } from './create-produit.dto';

export class UpdateProduitDto {
  @IsOptional()
  @IsString()
  descriptif: string;

  @IsOptional()
  @IsNumber()
  stock_initial: number;

  @IsOptional()
  @IsNumber()
  stock_disponible: number;

  @IsOptional()
  @IsNumber()
  prix_unit: number;

  @IsOptional()
  @IsString()
  lien_image: string;

  @IsOptional()
  @IsString()
  lien_video: string;

  // @IsOptional()
  // @IsArray()
  // tags: string[];
}
