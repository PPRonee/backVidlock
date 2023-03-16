import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';

import { Admin } from './entities/admin.entity';

import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from 'src/auth/jwt.strategy';
import { AuthModule } from 'src/auth/auth.module';
import { Client } from 'src/client/entities/client.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Admin, Client]),
    AuthModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      signOptions: { expiresIn: '8h' },
      secret: 'OneLuv',
    }),
  ],
  controllers: [AdminController],
  providers: [AdminService, JwtStrategy],
  // exports: [JwtStrategy, PassportModule],
})
export class AdminModule {}
