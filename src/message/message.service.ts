import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { Message } from './entities/message.entity';

@Injectable()
export class MessageService {
  updateMessage: any;
  constructor(
    @InjectRepository(Message)
    private messageRepository: Repository<Message>,
  ) {}

  async create(createMessageDto: CreateMessageDto): Promise<Message> {
    return await this.messageRepository.save(createMessageDto);
  }

  async findAll(): Promise<Message[]> {
    return await this.messageRepository.find();
  }

  async findOne(id: number): Promise<Message> {
    const messageFound = await this.messageRepository.findOneBy({ id: id });
    if (!messageFound) {
      throw new NotFoundException(`Pas de message avec l'id: ${id}`);
      //pour gérer les erreurs de ressource introuvable
    }
    return messageFound;
  }

  async update(
    id: number,
    updateMessageDto: UpdateMessageDto,
  ): Promise<Message> {
    const upMessage = await this.findOne(id);
    upMessage.observation = updateMessageDto.observation;
    return await this.messageRepository.save(upMessage);
  }

  async remove(id: number) {
    const result = await this.messageRepository.delete({ id });
    if (result.affected === 0) {
      throw new NotFoundException(`Pas de message avec l'id: ${id}`);
    }
    return `le message avec l'id: ${id} a été supprimé!`;
  }
}
