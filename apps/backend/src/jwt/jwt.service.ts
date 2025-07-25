import { Inject, Injectable } from '@nestjs/common'
import { CONFIG_OPTIONS } from './jwt.constants'
import { JwtModuleOptions } from './jwt.interfaces'
import * as jwt from 'jsonwebtoken'

@Injectable()
export class JwtService {
  constructor(
    @Inject(CONFIG_OPTIONS) private readonly options: JwtModuleOptions,
  ) {}

  sign(payload: object, isAccess: boolean): string {
    return jwt.sign(payload, this.options.secretKey, {
      expiresIn: isAccess ? '5 min' : '5 days',
    })
  }

  verify(token: string) {
    return jwt.verify(token, this.options.secretKey, {})
  }
}
