import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('produit')
export class Produit {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: false,
    type: 'varchar',
    length: 50,
  })
  refproduit: string;

  @Column({
    nullable: false,
    type: 'varchar',
    length: 50,
  })
  marque: string;

  @Column({
    nullable: false,
    type: 'varchar',
    length: 50,
  })
  categorie: string;

  @Column({
    nullable: true,
    type: 'varchar',
    length: 50,
  })
  Type: string;

  @Column({
    nullable: true,
    type: 'text',
  })
  descriptif: string;

  @Column({
    nullable: true,
    type: 'int',
  })
  stock_initial: number;

  @Column({
    nullable: true,
    type: 'int',
  })
  stock_disponible: number;

  @Column({
    nullable: true,
    type: 'int',
  })
  prix_unit: number;

  @Column({
    nullable: true,
    type: 'varchar',
    length: 250,
  })
  lien_image: string;

  @Column({
    nullable: true,
    type: 'varchar',
    length: 250,
  })
  lien_video: string;

  // @Column({
  //   nullable: true,
  //   type: 'varchar',
  //   length: 250,
  // })
  // tags: string[];
}
