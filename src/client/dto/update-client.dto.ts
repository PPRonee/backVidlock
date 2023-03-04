import { PartialType } from '@nestjs/mapped-types';
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { CreateClientDto } from './create-client.dto';

export class UpdateClientDto {
  @IsOptional()
  @IsString()
  Proffession: string;

  @IsOptional()
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
  Tel: string;

  @IsNotEmpty({
    message: ' *ce champ est obligatoire',
  })
  @IsString()
  Password: string;
}
