import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { DatabaseModule } from './modules/database.module'
import { ConsulenteModule } from './controllers/consulente/consulente.module'
import { OrigemModule } from './controllers/origem/origem.module'
import { TipoConsultaModule } from './controllers/tipo-consulta/tipo-consulta.module';
import { ClassificacaoModule } from './controllers/classificacao/classificacao.module';
import { TipoClassificacaoModule } from './controllers/tipo-classificacao/tipo-classificacao.module';
import { OduIfaModule } from './controllers/odu-ifa/odu-ifa.module';
import { VersosModule } from './controllers/versos/versos.module';


@Module({
  imports: [DatabaseModule, ConsulenteModule, OrigemModule, TipoConsultaModule, ClassificacaoModule, TipoClassificacaoModule, OduIfaModule, VersosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
