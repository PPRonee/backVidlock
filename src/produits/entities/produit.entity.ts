import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('produit')
export class Produit {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: false,
    type: 'varchar',
    length: 100,
  })
  refproduit: string;

  @Column({
    nullable: false,
    type: 'varchar',
    length: 100,
  })
  marque: string;

  @Column({
    nullable: false,
    type: 'varchar',
    length: 100,
  })
  categorie: string;

  @Column({
    nullable: true,
    type: 'varchar',
    length: 100,
  })
  Type: string;

  @Column({
    nullable: true,
    type: 'text',
  })
  descriptif: string;

  @Column({
    nullable: false,
    type: 'float',
  })
  stock_initial: number;

  @Column({
    nullable: false,
    type: 'float',
  })
  stock_disponible: number;

  @Column({
    nullable: false,
    type: 'float',
  })
  prix_unit: number;

  @Column({
    nullable: false,
    type: 'varchar',
    length: 250,
  })
  lien_image: string;

  @Column({
    nullable: false,
    type: 'varchar',
    length: 250,
  })
  lien_video: string;

  @Column({
    nullable: false,
    type: 'varchar',
    length: 250,
  })
  tags: string[];
}
