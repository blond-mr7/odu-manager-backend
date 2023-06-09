import { Controller, Get, Param } from '@nestjs/common';
import { TipoConsultaService } from './tipo-consulta.service';


@Controller('tipo-consulta')
export class TipoConsultaController {
  constructor(private readonly tipoConsultaService: TipoConsultaService) {}

  @Get()
  findAll() {
    return this.tipoConsultaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tipoConsultaService.findOne(id);
  }
}
