import { Message } from 'src/message/entities/message.entity';
import { Reservation } from 'src/reservation/entities/reservation.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('client')
export class Client {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: false,
    type: 'varchar',
    length: 100,
  })
  Nom: string;

  @Column({
    nullable: false,
    type: 'varchar',
    length: 100,
  })
  Prenom: string;

  @Column({
    nullable: false,
    type: 'date',
  })
  Date_naissance: string;

  @Column({
    nullable: true,
    type: 'varchar',
    length: 100,
  })
  Proffession: string;

  @Column({
    nullable: true,
    type: 'varchar',
    length: 50,
  })
  Num_Siret: string;

  @Column({
    nullable: false,
    type: 'varchar',
    length: 255,
  })
  Adresse: string;

  @Column({
    nullable: false,
    type: 'varchar',
    length: 255,
    unique: true,
  })
  Email: string;

  @Column({
    nullable: false,
    type: 'varchar',
    length: 255,
  })
  Tel: string;

  @Column({
    nullable: false,
    type: 'varchar',
    length: 255,
  })
  Password: string;

  @ManyToOne(() => Reservation, (reservation) => reservation.client, {
    eager: true,
  })
  reservation: Reservation[];

  @ManyToOne(() => Message, (message) => message.client, {
    eager: true,
  })
  message: Message[];
}

// is unique pose problem voir comment gerer l erreur 500 que ca produit quand des email son identique
