import 'dotenv/config'
import { Module } from "@nestjs/common"
import { JwtModule, JwtService } from "@nestjs/jwt"
import { TypeOrmModule } from "@nestjs/typeorm"
import { AuthController } from "./src/AuthController"
import { AuthDAO } from "./src/dao/AuthDAO"
import { AuthManager } from "./src/services/AuthManager"
import { jwtConstants } from "./src/services/constants"
import { JwtStrategy } from "./src/services/JwtStrategy"
import { LocalStrategy } from "./src/services/LocalStrategy"

@Module({
    imports: [
        TypeOrmModule.forFeature([AuthDAO]),
        JwtModule.register({
            secret: jwtConstants.secret,
            signOptions: { expiresIn: process.env.EXPIRESIN },
        }),
    ],
    providers: [AuthManager, JwtService, LocalStrategy, JwtStrategy],
    controllers: [AuthController]
})
export class AuthModule { }