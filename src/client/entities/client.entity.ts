import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
  Password: string;
}
