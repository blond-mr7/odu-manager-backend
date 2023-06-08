import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/services/prisma.service'

@Injectable()
export class OrigemService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.origem.findMany()
  }

  findOne(id: string) {
    return this.prisma.origem.findUnique({ where: { id } })
  }
}
