import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProduitDto } from './dto/create-produit.dto';
import { UpdateProduitDto } from './dto/update-produit.dto';
import { Produit } from './entities/produit.entity';

@Injectable()
export class ProduitsService {
  constructor(
    @InjectRepository(Produit)
    private produitRepository: Repository<Produit>,
  ) {}

  async create(createProduitDto: CreateProduitDto): Promise<Produit> {
    return await this.produitRepository.save(createProduitDto);
  }

  async findAll(): Promise<Produit[]> {
    return await this.produitRepository.find();
  }

  async findOne(id: number): Promise<Produit> {
    const produitFound = await this.produitRepository.findOneBy({ id: id });
    if (!produitFound) {
      throw new NotFoundException(`Pas de produit avec l'id: ${id}`);
      //pour gérer les erreurs de ressource introuvable
    }
    return produitFound;
  }

  async update(
    id: number,
    updateProduitDto: UpdateProduitDto,
  ): Promise<Produit> {
    const upProduit = await this.findOne(id);
    upProduit.descriptif = updateProduitDto.descriptif;
    upProduit.stock_initial = updateProduitDto.stock_initial;
    upProduit.prix_unit = updateProduitDto.prix_unit;
    upProduit.lien_image = updateProduitDto.lien_image;
    upProduit.lien_video = updateProduitDto.lien_video;
    upProduit.stock_disponible = updateProduitDto.stock_disponible;
    // upProduit.tags = updateProduitDto.tags;
    return await this.produitRepository.save(upProduit);
  }

  async remove(id: number) {
    const result = await this.produitRepository.delete({ id });
    if (result.affected === 0) {
      throw new NotFoundException(`Pas de produit avec l'id: ${id}`);
    }
    return `le produit à l'id: ${id} a été supprimé!`;
  }
}
