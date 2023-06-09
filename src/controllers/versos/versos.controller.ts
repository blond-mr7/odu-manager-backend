import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VersosService } from './versos.service';
import { Verso } from '@prisma/client';


@Controller('versos')
export class VersosController {
  constructor(private readonly versosService: VersosService) {}

  @Post()
  create(@Body() input: Verso) {
    return this.versosService.create(input);
  }

  @Get()
  findAll() {
    return this.versosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.versosService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() input: Verso) {
    return this.versosService.update(id, input);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.versosService.remove(id);
  }
}
