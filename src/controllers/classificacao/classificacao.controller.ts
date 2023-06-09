import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ClassificacaoService } from './classificacao.service';


@Controller('classificacao')
export class ClassificacaoController {
  constructor(private readonly classificacaoService: ClassificacaoService) {}

 

  @Get()
  findAll() {
    return this.classificacaoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.classificacaoService.findOne(+id);
  }

 
}
