import { PartialType } from '@nestjs/mapped-types';
import { CreateReservationDto } from './create-reservation.dto';

export class UpdateReservationDto {
  Date_debut: string;

  Date_fin: string;

  Produit: string[];

  Nom_Admin: string;

  Statut_Commande: string;
}
