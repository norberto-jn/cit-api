import { Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"
import { AuthModule } from "src/auth/AuthModule"
import { AuthDAO } from "src/auth/src/dao/AuthDAO"
import { PersonDAO } from "./src/dao/PersonDAO"
import { PersonController } from "./src/PersonController"
import { PersonManager } from "./src/services/PersonManager"

@Module({
    imports: [TypeOrmModule.forFeature([PersonDAO,AuthDAO]), AuthModule],
    controllers: [PersonController],
    providers: [PersonManager],
})
export class PersonModule { }