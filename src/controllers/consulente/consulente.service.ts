import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/services/prisma.service'

@Injectable()
export class ConsulenteService {
  constructor(private prisma: PrismaService) {}

   findAll() {
    return this.prisma.consulente.findMany()
  }

  findOne(id: string) {
    return this.prisma.consulente.findUnique({ where: { id } })
  }
}
