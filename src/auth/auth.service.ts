import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import * as bcrypt from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { Client } from 'src/client/entities/client.entity';
import { Repository } from 'typeorm';
import { LoginDto } from './dto/login-auth.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Client)
    private clientRepository: Repository<Client>,
    private jwtService: JwtService,
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
    const Tel = createAuthDto.Tel;
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
      Tel,
      Password: hashedPassword,
    });

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

  async login(loginDto: LoginDto) {
    const { Nom, Email, Password } = loginDto;
    const client = await this.clientRepository.findOneBy({ Email });
    // a l origin findOneBy ({ username})

    if (client && (await bcrypt.compare(Password, client.Password))) {
      const payload = { Nom };
      const accessToken = await this.jwtService.sign(payload);
      return { accessToken };
    } else {
      throw new UnauthorizedException(' identifiants incorrect, try again...');
    }
  }
}
