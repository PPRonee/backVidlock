import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import * as bcrypt from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { Admin } from './entities/admin.entity';
import { Repository } from 'typeorm';
import { LoginAdminDto } from './dto/loginAdmin-auth.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(Admin)
    private adminRepository: Repository<Admin>,
    private jwtService: JwtService,
  ) {}

  async registerAdmin(createAdminDto: CreateAdminDto) {
    //const { Nom, Password } = createAuthDto;

    const Nom = createAdminDto.Nom;
    const Password = createAdminDto.Password;
    const Email = createAdminDto.Email;

    // hashage du mot de passe
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(Password, salt);
    console.log('je suis salé!');

    // création d'une entité admin
    const admin = this.adminRepository.create({
      Nom,
      Email,
      Password: hashedPassword,
    });

    try {
      // enregistrement de l'entité admin
      const createdAdmin = await this.adminRepository.save(admin);
      console.log('je suis la');
      delete createdAdmin.Password;
      console.log('XXXXXXXX  Fin des operations  XXXXXXXX');
      return createdAdmin;
    } catch (error) {
      // gestion des erreurs
      if (error.code === '23505') {
        throw new ConflictException('Nom already exists');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }
}
