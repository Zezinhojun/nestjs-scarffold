import { TypeOrmCrudService } from '@dataui/crud-typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { TesteEntity } from './teste.entity';

@Injectable()
export class TesteService extends TypeOrmCrudService<TesteEntity> {
  constructor(
    @InjectRepository(TesteEntity)
    private readonly repository: Repository<TesteEntity>,
  ) {
    super(repository);
  }
}
