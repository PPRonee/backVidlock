import { Injectable, UnauthorizedException } from '@nestjs/common';

import { PassportStrategy } from '@nestjs/passport';
import { InjectRepository } from '@nestjs/typeorm';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Repository } from 'typeorm';
import { Client } from '../client/entities/client.entity';
import { Admin } from './entities/admin.entity';

@Injectable()
export class JwtStrategyAdmin extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(Admin)
    private adminRepository: Repository<Admin>,
  ) {
    super({
      secretOrKey: 'OneLuv',
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    });
  }

  // IMPORTANT IL FAUT GARDER CE NOM DE METHODE
  async validate(payload: any): Promise<Admin> {
    console.log('validate');
    const { Nom } = payload;
    const user: Admin = await this.adminRepository.findOneBy({ Nom });

    if (!user) throw new UnauthorizedException();
    return user;
  }
}
