import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TipoClassificacaoService } from './tipo-classificacao.service';


@Controller('tipo-classificacao')
export class TipoClassificacaoController {
  constructor(private readonly tipoClassificacaoService: TipoClassificacaoService) {}

 

  @Get()
  findAll() {
    return this.tipoClassificacaoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tipoClassificacaoService.findOne(+id);
  }
}
