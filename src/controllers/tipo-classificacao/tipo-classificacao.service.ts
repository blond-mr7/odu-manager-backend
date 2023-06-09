import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';


@Injectable()
export class TipoClassificacaoService {
 constructor(private prisma: PrismaService) {}

  findAll() {
    return `This action returns all tipoClassificacao`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tipoClassificacao`;
  }

 
}
