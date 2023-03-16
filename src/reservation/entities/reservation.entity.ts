import { Admin } from 'src/admin/entities/admin.entity';
import { Client } from 'src/client/entities/client.entity';
import { Produit } from 'src/produits/entities/produit.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

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
    length: 50,
  })
  Nom_reservation: string;

  @Column({
    nullable: false,
    type: 'int',
  })
  Num_reservations: number;

  @Column({
    nullable: false,
    type: 'varchar',
    length: 50,
  })
  Date_debut: string;

  @Column({
    nullable: false,
    type: 'varchar',
    length: 50,
  })
  Date_fin: string;

  // @Column({
  //   nullable: false,
  //   type: 'varchar',
  //   length: 100,
  // })
  // Produit: string[];

  @Column({
    nullable: true,
    type: 'varchar',
    length: 50,
  })
  Nom_Admin: string;

  @Column({
    nullable: true,
    type: 'varchar',
    length: 50,
  })
  Statut_Commande: string;

  @OneToMany(() => Client, (client) => client.reservation, { eager: false })
  client: Client;

  @OneToMany(() => Admin, (admin) => admin.reservation, { eager: false })
  admin: Admin;

  @ManyToMany(() => Produit, (produit) => produit, { eager: true })
  @JoinTable()
  produit: Produit[];
}
