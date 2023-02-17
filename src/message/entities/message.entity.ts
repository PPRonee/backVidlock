import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('message')
//entity: Message represente le nom de la table
export class Message {
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
    length: 255,
  })
  Email: string;

  @Column({
    nullable: false,
    type: 'varchar',
    length: 255,
  })
  Message: string;

  @Column({
    nullable: true,
    type: 'varchar',
    length: 255,
  })
  observation: string;
}
