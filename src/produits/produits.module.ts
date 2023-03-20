import { Module } from '@nestjs/common';
import { ProduitsService } from './produits.service';
import { ProduitsController } from './produits.controller';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Produit } from './entities/produit.entity';
import { Reservation } from 'src/reservation/entities/reservation.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Produit, Reservation]), PassportModule],
  //ici la methode forfeature permet de gerer la table produit
  controllers: [ProduitsController],
  providers: [ProduitsService],
})
export class ProduitsModule {}
