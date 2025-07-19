import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TesteController } from './teste.controller';
import { TesteEntity } from './teste.entity';
import { TesteService } from './teste.service';

@Module({
  imports: [TypeOrmModule.forFeature([TesteEntity])],
  providers: [TesteService],
  controllers: [TesteController],
  exports: [TesteService],
})
export class TesteModule {}
