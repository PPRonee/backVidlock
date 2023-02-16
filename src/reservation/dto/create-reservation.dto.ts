import { IsNotEmpty, IsString } from 'class-validator';

export class CreateReservationDto {
  @IsString()
  Date: string;

  @IsNotEmpty({
    message: ' *ce champ est obligatoire',
  })
  Nom_client: string;

  Num_reservations: number;

  @IsNotEmpty({
    message: ' *ce champ est obligatoire',
  })
  Date_debut: string;

  @IsNotEmpty({
    message: ' *ce champ est obligatoire',
  })
  Date_fin: string;

  @IsNotEmpty({
    message: ' *ce champ est obligatoire',
  })
  Produit: string[];

  @IsString()
  Nom_Admin: string;
}
