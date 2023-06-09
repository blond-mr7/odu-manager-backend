import { Module } from '@nestjs/common';
import { TipoConsultaService } from './tipo-consulta.service';
import { TipoConsultaController } from './tipo-consulta.controller';

@Module({
  controllers: [TipoConsultaController],
  providers: [TipoConsultaService]
})
export class TipoConsultaModule {}
