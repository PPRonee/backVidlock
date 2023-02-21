import { PartialType } from '@nestjs/mapped-types';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { CreateClientDto } from './create-client.dto';

export class UpdateClientDto {
  @IsString()
  Proffession: string;

  @IsString()
  Num_Siret: string;

  @IsNotEmpty({
    message: ' *ce champ est obligatoire',
  })
  @IsString()
  Adresse: string;

  @IsNotEmpty({
    message: ' *ce champ est obligatoire',
  })
  @IsString()
  @IsEmail(
    {},
    {
      message: "Format d'email invalide",
    },
  )
  Email: string;

  @IsNotEmpty({
    message: ' *ce champ est obligatoire',
  })
  @IsString()
  Password: string;
}
