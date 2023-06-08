import { Injectable } from '@nestjs/common'
import { Consulente } from '@prisma/client'
import { PrismaService } from 'src/services/prisma.service'

@Injectable()
export class ConsulenteService {
  constructor(private prisma: PrismaService) {}

  create(input: Consulente) {
    return this.prisma.consulente.create({ data: input })
  }

  findAll() {
    return this.prisma.consulente.findMany()
  }

  findOne(id: string) {
    return this.prisma.consulente.findUnique({ where: { id } })
  }

  update(id: string, input: Partial<Consulente>) {
    return this.prisma.consulente.update({ where: { id }, data: input })
  }

  remove(id: string) {
    return this.prisma.consulente.delete({ where: { id } })
  }
}
