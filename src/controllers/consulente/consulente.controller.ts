import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'
import { ConsulenteService } from './consulente.service'
import { Consulente } from '@prisma/client'

@Controller('consulente')
export class ConsulenteController {
  constructor(private readonly consulenteService: ConsulenteService) {}

  @Post()
  create(@Body() input: Consulente) {
    return this.consulenteService.create(input)
  }

  @Get()
  findAll() {
    return this.consulenteService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.consulenteService.findOne(id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() input: Partial<Consulente>) {
    return this.consulenteService.update(id, input)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.consulenteService.remove(id)
  }
}
