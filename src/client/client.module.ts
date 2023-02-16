import { Module } from '@nestjs/common';
import { ClientService } from './client.service';
import { ClientController } from './client.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Client } from './entities/client.entity';
import { PassportModule } from '@nestjs/passport';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([Client]), PassportModule, AuthModule],
  //ici la methode forfeature permet de gerer la table produit
  controllers: [ClientController],
  providers: [ClientService],
})
export class ClientModule {}
