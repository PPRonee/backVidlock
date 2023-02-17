import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateMessageDto {
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

  @IsString()
  Message: string;
}
