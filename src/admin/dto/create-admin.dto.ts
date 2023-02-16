import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateAdminDto {
  @IsNotEmpty({
    message: ' *ce champ est obligatoire',
  })
  Nom: string;

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
