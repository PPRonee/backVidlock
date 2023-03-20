import { Module } from '@nestjs/common';
import { ReservationService } from './reservation.service';
import { ReservationController } from './reservation.controller';
import { PassportModule } from '@nestjs/passport';
import { Reservation } from './entities/reservation.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Reservation]), PassportModule],
  //ici la methode forfeature permet de gerer la table Reservation
  controllers: [ReservationController],
  providers: [ReservationService],
})
export class ReservationModule {}
