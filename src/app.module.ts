import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { DatabaseModule } from './modules/database.module'
import { ConsulenteModule } from './controllers/consulente/consulente.module'
import { OrigemModule } from './controllers/origem/origem.module'

@Module({
  imports: [DatabaseModule, ConsulenteModule, OrigemModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
