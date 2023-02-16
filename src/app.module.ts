import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProduitsModule } from './produits/produits.module';
import { ClientModule } from './client/client.module';
import { Client } from './client/entities/client.entity';
import { Produit } from './produits/entities/produit.entity';
import { AuthModule } from './auth/auth.module';
import { ReservationModule } from './reservation/reservation.module';
import * as dotenv from 'dotenv';
import { Reservation } from './reservation/entities/reservation.entity';
import { AdminModule } from './admin/admin.module';
import { Admin } from './admin/entities/admin.entity';

dotenv.config({ path: '.env' });
//Pour indiquer ou est notre environnement

@Module({
  imports: [
    TypeOrmModule.forRoot({
      //la methode forRoot permet de gerer la base de donnée
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [Client, Produit, Reservation, Admin],
      synchronize: process.env.MODE === 'DEV' ? true : false,
      //'dev'? true permet de modifié la base de données uniquement en mode dev
    }),

    ProduitsModule,
    ClientModule,
    AuthModule,
    ReservationModule,
    AdminModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
