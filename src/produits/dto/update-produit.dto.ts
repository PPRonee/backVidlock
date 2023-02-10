import { PartialType } from '@nestjs/mapped-types';
import { IsArray, IsEmpty, IsNumber, IsString } from 'class-validator';
import { CreateProduitDto } from './create-produit.dto';

export class UpdateProduitDto {
  @IsString()
  descriptif: string;

  @IsNumber()
  stock_initial: number;

  @IsNumber()
  stock_disponible: number;

  @IsNumber()
  prix_unit: number;

  @IsString()
  lien_image: string;

  @IsString()
  lien_video: string;

  @IsArray()
  tags: string[];
}
