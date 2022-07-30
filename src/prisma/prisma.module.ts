import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
@Global()
@Module({
  providers: [PrismaService],
  // for other modules to be able to inject the prismaService, we need to export it
  exports: [PrismaService],
})
export class PrismaModule {}
