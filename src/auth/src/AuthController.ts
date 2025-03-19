import { Body, Controller, HttpCode, Post, Request, Res, UseGuards } from "@nestjs/common"
import { Response } from 'express';
import { AuthManager } from "src/auth/src/services/AuthManager";
import { JwtAuthGuardCookie } from "src/auth/src/services/JwtAuthGuardCookie";
import { AuthRequestDTO } from "./dtos/request/AuthRequestDTO";

@Controller('auth')
export class AuthController {

    constructor(
        private _authManager: AuthManager
    ) { }

    // @UseGuards(LocalAuthGuard)
    @HttpCode(200)
    @Post('login')
    async login(@Request() req, @Body() dto: AuthRequestDTO, @Res() res: Response) {
        const user = await this._authManager.login(dto)

        res.cookie('token', user.access_token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production', // Só envia em HTTPS em produção
            sameSite: 'strict',
            maxAge: 1000 * 60 * 60 * 24 * 7, // 1 semana
            path: '/',
        });

        return res.send({ message: 'Login realizado com sucesso!' });

    }

    @Post('logout')
    logout(@Res() res: Response) {
        res.clearCookie('token', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production', // Só envia em HTTPS em produção
            sameSite: 'strict',
            path: '/',
        });

        return res.send({ message: 'Logout realizado com sucesso!' });
    }

    @UseGuards(JwtAuthGuardCookie)
    @Post('verify-auth')
    verifyAuth(@Res() res: Response) {
        return res.send({ message: 'Autenticado!' });
    }

}