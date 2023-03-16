import { Injectable, UnauthorizedException } from '@nestjs/common';

import { PassportStrategy } from '@nestjs/passport';
import { InjectRepository } from '@nestjs/typeorm';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Admin } from 'src/admin/entities/admin.entity';
import { Repository } from 'typeorm';
import { Client } from '../client/entities/client.entity';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(Client)
    private clientRepository: Repository<Client>,
    @InjectRepository(Admin)
    private adminRepository: Repository<Admin>,
  ) {
    super({
      secretOrKey: 'OneLuv',
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    });
  }

  // IMPORTANT IL FAUT GARDER CE NOM DE METHODE
  async validate(payload: any): Promise<Client> {
    console.log('validate jwt strategy');
    let user;
    const { Nom, Role } = payload;
    if (Role === 'Admin') {
      console.log('role admin');

      user = await this.clientRepository.findOneBy({ Nom });
    } else {
      console.log('role client');
      user = await this.clientRepository.findOneBy({ Nom });
    }

    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
