import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '<h1>Test de DEMARAGE VIDLOCK...<h2>connection reussi... <h4>connectez-vous a une table';
  }
}
