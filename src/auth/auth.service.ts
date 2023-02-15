import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import * as bcrypt from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { Client } from 'src/client/entities/client.entity';
import { Repository } from 'typeorm';
import { LoginDto } from './dto/login-auth.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Client)
    private clientRepository: Repository<Client>,
  ) {}

  async register(createAuthDto: CreateAuthDto) {
    //const { Nom, Password } = createAuthDto;

    const Nom = createAuthDto.Nom;
    const Prenom = createAuthDto.Prenom;
    const Date_naissance = createAuthDto.Date_naissance;
    const Proffession = createAuthDto.Proffession;
    const Num_Siret = createAuthDto.Num_Siret;
    const Adresse = createAuthDto.Adresse;
    const Password = createAuthDto.Password;
    const Email = createAuthDto.Email;

    // hashage du mot de passe
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(Password, salt);
    console.log('je suis salé!');

    // création d'une entité user
    const client = this.clientRepository.create({
      Nom,
      Prenom,
      Date_naissance,
      Proffession,
      Num_Siret,
      Adresse,
      Email,
      Password: hashedPassword,
    });

    /*const valeur = 1;
    const objet = {
      propriété1: valeur,
      propriété2: true,
    };
    const objet2 = {
      valeur,
    };*/

    try {
      // enregistrement de l'entité user
      const createdClient = await this.clientRepository.save(client);
      console.log('je suis la');
      delete createdClient.Password;
      console.log('XXXXXXXX  Fin des operations  XXXXXXXX');
      return createdClient;
    } catch (error) {
      // gestion des erreurs
      if (error.code === '23505') {
        throw new ConflictException('Nom already exists');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }

  async login(loginDto: LoginDto) {}
}
