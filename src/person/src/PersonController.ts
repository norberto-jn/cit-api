import { Body, Controller, Get, Post } from "@nestjs/common"
import { PersonRequestDTO } from "./dtos/request/PersonRequestDTO"
import { PersonManager } from "./services/PersonManager"

@Controller('person')
export class PersonController {

    constructor(
        private _personService: PersonManager
    ) { }

    @Post()
    async save(@Body() dto: PersonRequestDTO) {
        console.log('=================================',dto)
        return this._personService.save(dto)
    }


    @Get('test')
    async getProfile() {
        return 'teste'
    }

    /*

    @UseGuards(JwtAuthGuard)
    @Get('profile')
    async getProfile(@User() user: PersonModel) {
        return new PersonResponseDTO(await this._personService.getProfile(user.code))
    }

    @UseGuards(JwtAuthGuard)
    @Get(':code')
    async findOne(@Param('code') code: number) {
        return new PersonResponseDTO(await this._personService.finOne(code))
    }

    @UseGuards(JwtAuthGuard)
    @Put()
    @UseInterceptors(FileInterceptor('file'))
    async update(@User() user: PersonModel, @Body() dto: PersonUpdateRequestDTO, @UploadedFile() file: Express.Multer.File) {
        return this._personService.update(user.code, dto, file)
    }

    @UseGuards(JwtAuthGuard)
    @Delete()
    async delete(@User() user: PersonModel) {
        return this._personService.delete(user.code)
    }*/

}