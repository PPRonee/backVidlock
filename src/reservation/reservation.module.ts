import { Module } from '@nestjs/common';
import { ReservationService } from './reservation.service';
import { ReservationController } from './reservation.controller';
import { Reservation } from './entities/reservation.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Reservation])],
  //ici la methode forfeature permet de gerer la table Reservation
  controllers: [ReservationController],
  providers: [ReservationService],
})
export class ReservationModule {}
