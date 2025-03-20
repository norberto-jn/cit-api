import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from "@nestjs/common"
import { JwtAuthGuardCookie } from "src/auth/src/services/JwtAuthGuardCookie"
import { ExcavationUpdateRequestDTO } from "src/excavation/src/dtos/request/ExcavationUpdateRequestDTO"
import { ExcavationManager } from "src/excavation/src/services/ExcavationManager"
import { ExcavationSaveRequestDTO } from "./dtos/request/ExcavationSaveRequestDTO"
import { User } from "src/common/decorators/User"
import { PersonModel } from "src/person/src/models/PersonModel"

@UseGuards(JwtAuthGuardCookie)
@Controller('excavation')
export class ExcavationController {

    constructor(
        private _personService: ExcavationManager
    ) { }

    @Post()
    async save(@Body() dto: ExcavationSaveRequestDTO, @User() user: PersonModel): Promise<void> {
        return this._personService.save(dto, user.code)
    }

    @Get()
    async findAll() {
        return this._personService.findAll()
    }

    @Get(':code')
    async findOne(@Param('code') code: number) {
        return this._personService.findOne(code)
    }

    @Put(':code')
    async update(@Param('code') code: number, @Body() dto: ExcavationUpdateRequestDTO) {
        return this._personService.update(code, dto)
    }


    @Delete(':code')
    async delete(@Param('code') code: number) {
        return this._personService.delete(code)
    }


}