import {Controller, Post, Body, HttpCode} from '@nestjs/common';
import { AuthDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
    @Post('registor')
    async registor(@Body() dto: AuthDto) {

    }

    @HttpCode(200)
    @Post('login')
    async login(@Body() dto: AuthDto) {

    }
}
