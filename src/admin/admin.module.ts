import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';

import { Admin } from './entities/admin.entity';
import { JwtStrategyAdmin } from './jwt.strategyAdmin';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    TypeOrmModule.forFeature([Admin]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      signOptions: { expiresIn: '2h' },
      secret: 'OneLuv',
    }),
  ],
  controllers: [AdminController],
  providers: [AdminService, JwtStrategyAdmin],
  exports: [JwtStrategyAdmin, PassportModule],
})
export class AdminModule {}
