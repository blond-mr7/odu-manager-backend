import { Module } from '@nestjs/common';
import { OduIfaService } from './odu-ifa.service';
import { OduIfaController } from './odu-ifa.controller';

@Module({
  controllers: [OduIfaController],
  providers: [OduIfaService]
})
export class OduIfaModule {}
