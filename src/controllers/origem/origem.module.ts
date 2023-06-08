import { Module } from '@nestjs/common';
import { OrigemService } from './origem.service';
import { OrigemController } from './origem.controller';

@Module({
  controllers: [OrigemController],
  providers: [OrigemService]
})
export class OrigemModule {}
