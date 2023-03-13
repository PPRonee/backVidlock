import { Reservation } from 'src/reservation/entities/reservation.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('admin')
export class Admin {
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
    unique: true,
  })
  Email: string;

  @Column({
    nullable: false,
    type: 'varchar',
    length: 255,
  })
  Password: string;

  @ManyToOne(() => Reservation, (reservation) => reservation.admin, {
    eager: true,
  })
  reservation: Reservation[];
}
