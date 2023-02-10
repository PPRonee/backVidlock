import { IsDate, IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateClientDto {
  @IsString()
  @IsNotEmpty({
    message: ' *ce champ est obligatoire',
  })
  Nom: string;

  @IsString()
  @IsNotEmpty({
    message: ' *ce champ est obligatoire',
  })
  Prenom: string;

  @IsNotEmpty({
    message: ' *ce champ est obligatoire',
  })
  @IsString()
  Date_naissance: string;

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
