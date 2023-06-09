import { Module } from '@nestjs/common';
import { TipoClassificacaoService } from './tipo-classificacao.service';
import { TipoClassificacaoController } from './tipo-classificacao.controller';

@Module({
  controllers: [TipoClassificacaoController],
  providers: [TipoClassificacaoService]
})
export class TipoClassificacaoModule {}
