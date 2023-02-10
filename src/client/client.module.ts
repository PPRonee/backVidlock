import { Module } from '@nestjs/common';
import { ClientService } from './client.service';
import { ClientController } from './client.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Client } from './entities/client.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Client])],
  //ici la methode forfeature permet de gerer la table produit
  controllers: [ClientController],
  providers: [ClientService],
})
export class ClientModule {}
