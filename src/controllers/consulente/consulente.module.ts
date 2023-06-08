import { Module } from '@nestjs/common';
import { ConsulenteService } from './consulente.service';
import { ConsulenteController } from './consulente.controller';

@Module({
  controllers: [ConsulenteController],
  providers: [ConsulenteService]
})
export class ConsulenteModule {}
