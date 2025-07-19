import { Crud, CrudController } from '@dataui/crud';
import { Controller } from '@nestjs/common';

import { TesteEntity } from './teste.entity';
import { TesteService } from './teste.service';

@Crud({
  model: {
    type: TesteEntity,
  },
})
@Controller('teste')
export class TesteController implements CrudController<TesteEntity> {
  constructor(public readonly service: TesteService) {}
}
