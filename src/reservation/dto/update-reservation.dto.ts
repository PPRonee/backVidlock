import { PartialType } from '@nestjs/mapped-types';
import { IsOptional, IsString } from 'class-validator';
import { CreateReservationDto } from './create-reservation.dto';

export class UpdateReservationDto {
  @IsString()
  @IsOptional()
  Date_debut: string;

  @IsString()
  @IsOptional()
  Date_fin: string;

  @IsString()
  @IsOptional()
  Produit: string[];

  @IsString()
  @IsOptional()
  Nom_Admin: string;

  @IsString()
  @IsOptional()
  Statut_Commande: string;
}
