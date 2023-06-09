import { Controller, Get, Param,  } from '@nestjs/common'
import { ConsulenteService } from './consulente.service'


@Controller('consulente')
export class ConsulenteController {
  constructor(private readonly consulenteService: ConsulenteService) {}

   @Get()
  findAll() {
    return this.consulenteService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.consulenteService.findOne(id)
  }
}
