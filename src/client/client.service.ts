import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { Client } from './entities/client.entity';

@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(Client)
    private clientRepository: Repository<Client>,
  ) {}

  async create(createClientDto: CreateClientDto): Promise<Client> {
    return await this.clientRepository.save(createClientDto);
  }

  async findAll(): Promise<Client[]> {
    return await this.clientRepository.find();
  }

  async findOne(id: number): Promise<Client> {
    const clientFound = await this.clientRepository.findOneBy({ id: id });
    if (!clientFound) {
      throw new NotFoundException(`Pas de client avec l'id: ${id}`);
      //pour gérer les erreurs de ressource introuvable
    }
    return clientFound;
  }

  update(id: number, updateClientDto: UpdateClientDto) {
    return `This action updates a #${id} client`;
  }

  async remove(id: number) {
    const result = await this.clientRepository.delete({ id });
    if (result.affected === 0) {
      throw new NotFoundException(`Pas de produit avec l'id: ${id}`);
    }
    return `le client avec l'id: ${id} a été supprimé!`;
  }
}
