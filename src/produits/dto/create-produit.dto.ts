import { IsBoolean, IsNumber, IsString, IsArray } from 'class-validator';

export class CreateProduitDto {
  refProduit: string;

  @IsString()
  marque: string;

  @IsString()
  categorie: string;

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

  tags: string[];
}
