import { Injectable } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { Request } from 'express'
import { Strategy } from 'passport-jwt'
import { jwtConstants } from './constants'

export const fromCookie = (cookieName: string) => (req: Request) => {
    return req.cookies && req.cookies[cookieName] ? req.cookies[cookieName] : null;
};

@Injectable()
export class JwtStrategyCookie extends PassportStrategy(Strategy, 'jwt-strategy-cookie') {

    constructor() {
        super({
            jwtFromRequest: fromCookie('token'), // Extrai o token do cookie,
            ignoreExpiration: false,
            secretOrKey: jwtConstants.secret

        })
    }

    async validate(payload: any) {
        // O payload já é o token JWT decodificado
        return payload;
    }
}