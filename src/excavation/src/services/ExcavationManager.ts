import { BadRequestException, Injectable } from "@nestjs/common"
import 'dotenv/config'
import { ExcavationDAO } from "src/excavation/src/dao/ExcavationDAO"
import { ExcavationSaveRequestDTO } from "src/excavation/src/dtos/request/ExcavationSaveRequestDTO"
import { ExcavationUpdateRequestDTO } from "src/excavation/src/dtos/request/ExcavationUpdateRequestDTO"
import { ExcavationModel } from "src/excavation/src/models/ExcavationModel"

@Injectable()
export class ExcavationManager {

    constructor(
        private readonly _excavationDAO: ExcavationDAO,
    ) { }

    async save(dto: ExcavationSaveRequestDTO, userCode: number): Promise<void> {

        const excavationSaveModel: ExcavationModel = {
            name: dto.name,
            description: dto.description,
            latitude: dto.latitude,
            longitude: dto.longitude,
            altitude: dto.altitude,
            createdByUserCode: userCode
        }

        this._excavationDAO.save(excavationSaveModel)

    }

    async findAll() {
        return this._excavationDAO.find()
    }

    async findOne(code: number) {

        const excavationModel = await this._excavationDAO.findOne({ code })

        if (!excavationModel)
            throw new BadRequestException(`Não foi encontrada nenhuma escavação com o código ${code}.`);

        return excavationModel
    }

    async update(code: number, dto: ExcavationUpdateRequestDTO): Promise<void> {

        const excavationModel = await this._excavationDAO.findOne({ code })

        if (!excavationModel)
            throw new BadRequestException(`Não foi possível atualizar a escavação, o código ${code} não foi encontrado.`);

        const excavationSaveModel: ExcavationModel = {
            name: dto.name,
            description: dto.description,
            latitude: dto.latitude,
            longitude: dto.longitude,
            altitude: dto.altitude,
            createdByUserCode: 1
        }

        this._excavationDAO.partialUpdate(excavationModel.code, excavationSaveModel)

    }

    async delete(code: number) {
        const excavationModel = await this._excavationDAO.findOne({ code })

        if (!excavationModel)
            throw new BadRequestException(`Não foi possível excluir a escavação, o código ${code} não foi encontrado.`);

        await this._excavationDAO.delete(excavationModel)
    }


}