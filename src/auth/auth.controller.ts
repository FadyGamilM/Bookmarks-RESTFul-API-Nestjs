import { Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  //! Inject the authService service into the controller
  constructor(private authService: AuthService) {}

  @Post('signup')
  signup() {
    this.authService.signup();
  }

  @Post('signin')
  signin() {
    this.authService.signin();
  }
}
