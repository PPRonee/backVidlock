import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('reservation')
export class Reservation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: true,
  })
  Date_Resa: string;

  @Column({
    nullable: false,
    type: 'varchar',
    length: 100,
  })
  Nom_client: string;

  @Column({
    nullable: false,
    type: 'float',
  })
  Num_reservations: number;

  @Column({
    nullable: false,
    type: 'varchar',
    length: 100,
  })
  Date_debut: string;

  @Column({
    nullable: false,
    type: 'varchar',
    length: 100,
  })
  Date_fin: string;

  @Column({
    nullable: false,
    type: 'varchar',
    length: 100,
  })
  Produit: string[];

  @Column({
    nullable: false,
    type: 'varchar',
    length: 100,
  })
  Nom_Admin: string;

  @Column({
    nullable: true,
    type: 'varchar',
    length: 100,
  })
  Statut_Commande: string;
}
