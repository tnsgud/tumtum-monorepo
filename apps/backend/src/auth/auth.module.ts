import { Module } from '@nestjs/common'
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'
import { PrismaService } from 'src/prisma/prisma.service'

@Module({
  controllers: [AuthController],
  providers: [PrismaService, AuthService],
  exports: [AuthService],
})
export class AuthModule {}
