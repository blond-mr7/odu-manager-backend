import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';


@Injectable()
export class TipoConsultaService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.tipoConsulta.findMany()
  }

  findOne(id: string) {
    return this.prisma.tipoConsulta.findUnique({ where: { id } })
  }
}

  
