import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';


@Injectable()
export class OduIfaService {
 constructor(private prisma: PrismaService) {}

  findAll() {
    return `This action returns all oduIfa`;
  }

  findOne(id: number) {
    return `This action returns a #${id} oduIfa`;
  }
 }
