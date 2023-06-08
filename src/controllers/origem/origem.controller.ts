import { Controller, Get, Param } from '@nestjs/common'
import { OrigemService } from './origem.service'

@Controller('origem')
export class OrigemController {
  constructor(private readonly origemService: OrigemService) {}

  @Get()
  findAll() {
    return this.origemService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.origemService.findOne(id)
  }
}
