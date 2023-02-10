import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProduitsModule } from './produits/produits.module';
import { ClientModule } from './client/client.module';
import { Client } from './client/entities/client.entity';
import { Produit } from './produits/entities/produit.entity';
import * as dotenv from 'dotenv';

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
      entities: [Client, Produit],
      synchronize: process.env.MODE === 'DEV' ? true : false,
      //'dev'? true permet de modifié la base de données uniquement en mode dev
    }),

    ProduitsModule,
    ClientModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
