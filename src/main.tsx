import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TypeOrmModule } from '@nestjs/typeorm';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');
  // ajout du terme 'api' a http://localhost:8080/api/
  app.enableCors();
  //ajout CORS pour permettre la comunication avec la database
  // qui est restreinte par defaut
  await app.listen(8080);
  //on va émettre sur le port "8080"
}
bootstrap();
