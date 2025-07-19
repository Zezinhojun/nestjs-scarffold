import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeOrmConfig } from './config/typeorm.config';
import { TesteModule } from './modules/teste/teste.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), TesteModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
