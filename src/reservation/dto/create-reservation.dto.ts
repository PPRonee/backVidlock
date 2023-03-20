import {
  IsArray,
  isArray,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { Produit } from 'src/produits/entities/produit.entity';

export class CreateReservationDto {
  @IsString()
  Date_Resa: string;

  @IsNotEmpty({
    message: ' *ce champ est obligatoire',
  })
  // @IsOptional()
  Nom_client: string;

  // @IsOptional()
  // Num_reservations: number;

  @IsNotEmpty({
    message: ' *ce champ est obligatoire',
  })
  Date_debut: string;

  @IsNotEmpty({
    message: ' *ce champ est obligatoire',
  })
  Date_fin: string;

  @IsOptional()
  @IsString()
  Nom_Admin: string;

  @IsString()
  @IsOptional()
  Statut_Commande: string;

  @IsNumber()
  @IsOptional()
  Prix_Total: number;

  @IsArray()
  produit: Produit[];
}
