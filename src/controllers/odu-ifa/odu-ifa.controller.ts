import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OduIfaService } from './odu-ifa.service';


@Controller('odu-ifa')
export class OduIfaController {
  constructor(private readonly oduIfaService: OduIfaService) {}

  
  @Get()
  findAll() {
    return this.oduIfaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.oduIfaService.findOne(+id);
  }

 }
