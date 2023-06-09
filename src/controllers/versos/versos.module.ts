import { Module } from '@nestjs/common';
import { VersosService } from './versos.service';
import { VersosController } from './versos.controller';

@Module({
  controllers: [VersosController],
  providers: [VersosService]
})
export class VersosModule {}
