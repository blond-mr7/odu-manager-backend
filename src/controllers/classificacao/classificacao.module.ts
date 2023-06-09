import { Module } from '@nestjs/common';
import { ClassificacaoService } from './classificacao.service';
import { ClassificacaoController } from './classificacao.controller';

@Module({
  controllers: [ClassificacaoController],
  providers: [ClassificacaoService]
})
export class ClassificacaoModule {}
