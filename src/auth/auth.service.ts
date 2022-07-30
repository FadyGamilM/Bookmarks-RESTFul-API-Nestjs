import { Injectable } from '@nestjs/common';
//! export the User and Bookmark tables from prisma/client
import { User, Bookmark } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable({})
export class AuthService {
  //! inject the prismaService into the authService
  constructor(private prismaService: PrismaService) {}
  signin() {
    return 'Signed Up';
  }

  signup() {
    return 'Signed In';
  }
}
