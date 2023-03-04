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

  async update(id: number, updateClientDto: UpdateClientDto): Promise<Client> {
    const upClient = await this.findOne(id);

    upClient.Proffession = updateClientDto.Proffession;
    upClient.Num_Siret = updateClientDto.Num_Siret;
    upClient.Adresse = updateClientDto.Adresse;
    upClient.Email = updateClientDto.Email;
    upClient.Tel = updateClientDto.Tel;
    upClient.Password = updateClientDto.Password;

    return await this.clientRepository.save(upClient);
  }

  async remove(id: number) {
    const result = await this.clientRepository.delete({ id });
    if (result.affected === 0) {
      throw new NotFoundException(`Pas de produit avec l'id: ${id}`);
    }
    return `le client avec l'id: ${id} a été supprimé!`;
  }
}
