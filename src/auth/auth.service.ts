import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  signin() {
    return 'Signed Up';
  }

  signup() {
    return 'Signed In';
  }
}
