import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';


@Injectable()
export class ClassificacaoService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return `This action returns all classificacao`;
  }

  findOne(id: number) {
    return `This action returns a #${id} classificacao`;
  }

 
}
