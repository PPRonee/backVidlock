import { Injectable, UnauthorizedException } from '@nestjs/common';

import { PassportStrategy } from '@nestjs/passport';
import { InjectRepository } from '@nestjs/typeorm';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Repository } from 'typeorm';
import { Client } from '../client/entities/client.entity';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(Client)
    private clientRepository: Repository<Client>,
  ) {
    super({
      secretOrKey: 'OneLuv',
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    });
  }

  // IMPORTANT IL FAUT GARDER CE NOM DE METHODE
  async validate(payload: any): Promise<Client> {
    console.log('validate');
    const { Nom } = payload;
    const user: Client = await this.clientRepository.findOneBy({ Nom });

    if (!user) throw new UnauthorizedException();
    return user;
  }
}
