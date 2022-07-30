import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  //! to use the prismaService, you have to import its module
  //   imports: [PrismaModule], // or we can mark this module as a Gloabl module
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
