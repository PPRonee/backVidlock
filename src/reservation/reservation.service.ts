import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { Reservation } from './entities/reservation.entity';

@Injectable()
export class ReservationService {
  constructor(
    @InjectRepository(Reservation)
    private reservationRepository: Repository<Reservation>,
  ) {}

  async create(
    createReservationDto: CreateReservationDto,
  ): Promise<Reservation> {
    return await this.reservationRepository.save(createReservationDto);
  }

  async findAll(): Promise<Reservation[]> {
    return await this.reservationRepository.find();
  }

  async findOne(id: number): Promise<Reservation> {
    const reservationFound = await this.reservationRepository.findOneBy({
      id: id,
    });
    if (!reservationFound) {
      throw new NotFoundException(`Pas de reservation avec l'id: ${id}`);
      //pour gérer les erreurs de ressource introuvable
    }
    return reservationFound;
  }

  update(id: number, updateReservationDto: UpdateReservationDto) {
    return `This action updates a #${id} reservation`;
  }

  async remove(id: number) {
    const result = await this.reservationRepository.delete({ id });
    if (result.affected === 0) {
      throw new NotFoundException(`Pas de reservation avec l'id: ${id}`);
    }
    return `le client avec l'id: ${id} a été supprimé!`;
  }
}
