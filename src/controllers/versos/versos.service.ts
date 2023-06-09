import { Injectable } from '@nestjs/common';
import { Verso } from '@prisma/client';
import { PrismaService } from 'src/services/prisma.service';

@Injectable()
export class VersosService {
    constructor(private prisma: PrismaService) {}
  

  findAll() {
    return this.prisma.verso.findMany();
  }

  findOne(id: string) {
    return this.prisma.origem.findUnique({ where: { id } })
  }
  
  create(input: Verso) {
    return this.prisma.verso.create({data: input})
  }
 
  update(id: string, input: Verso) {
    return this.prisma.verso.update({where: {id}, data: input})
  }

  remove(id: string) {
    return this.prisma.verso.delete({where: {id}})
  }

}