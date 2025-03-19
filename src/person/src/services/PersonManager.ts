import { BadRequestException, Injectable } from "@nestjs/common"
import * as bcrypt from 'bcrypt'
import 'dotenv/config'
import { PersonDAO } from "src/person/src/dao/PersonDAO"
import { PersonRequestDTO } from "src/person/src/dtos/request/PersonRequestDTO"
import { PersonModel } from "src/person/src/models/PersonModel"

@Injectable()
export class PersonManager {

    constructor(
        private readonly _personDAO: PersonDAO,
    ) { }

    async save(dto: PersonRequestDTO): Promise<PersonModel> {

        const getPersonEmail: PersonModel = await this._personDAO.findOne({ email: dto.email })

        if (getPersonEmail)
            throw new BadRequestException(`O endereço de email ${dto.email} já está em uso.`)

        const getPersonPhone: PersonModel = await this._personDAO.findOne({ email: dto.email })

        if (getPersonPhone)
            throw new BadRequestException(`O telefone ${dto.email} já está em uso.`)

        const personSaveModel: PersonModel = {
            name: dto.name,
            birthday: dto.birthday,
            email: dto.email,
            phone: dto.phone,
            genre: dto.genre,
            country: dto.country,
            state: dto.state,
            city: dto.city,
            auth: {
                password: await bcrypt.hash(dto.password, Number(process.env.SALTORROUNDS))
            }
        }

        const personSaved: PersonModel = await this._personDAO.save(personSaveModel)
        console.log('=================================',personSaved)
        //  if (file) {
        //      try {
        //          const url = await GoogleCloudStorageUtils.Upload(personSaved.code.toString(), file, `person/${personSaved.code}/profile/picture/`)
        //          await this._personDAO.update({ code: personSaveModel.code }, { url_image: url })
        //          console.log('saved sucess!')
        //      } catch (error) {
        //          console.log('ERRO', error)
        //      }
        //  }

        return personSaved
    }
    /*
    
        async getProfile(code: number){
    
            const personModel = await this._personDAO.findOne(code, { relations: ['voter'] })
    
            if (!personModel)
                throw new NotFoundException(`Pessoa de código ${code} não foi econtrada.`)
    
    
            return await this._personDAO.getByCode(code)
        
        }
    
        async finOne(code: number) {
    
            const personModel = await this._personDAO.findOne(code, { relations: ['voter'] })
    
            if (!personModel)
                throw new NotFoundException(`Pessoa de código ${code} não foi econtrada.`)
    
            return await this._personDAO.getByCode(code)
        
        }
    
        async update(code: number,  dto: PersonUpdateRequestDTO, file: Express.Multer.File): Promise<PersonModel> {
            
            const personModel = await this._personDAO.findOne(code, { relations: ['voter'] })
            
            if (!personModel)
                throw new NotFoundException(`Pessoa de código ${code} não foi econtrada.`)
    
            if(personModel.email !== dto.email ){
    
                const existsEmail = await this._personDAO.validateEmailByCode(code, dto.email)
        
                if (existsEmail)
                    throw new NotFoundException('Não foi possível atualizar os dados, pois esse endereço de e-mail já está em uso.')
                
            }
                
            const existsPhone = await this._personDAO.validatePhoneByCode(code, dto.email)
            
            if (existsPhone)
                throw new NotFoundException('Não foi possível atualizar os dados, pois esse número de telefone já está em uso.')
            
            const personUpdateModel: PersonModel = {
                ...personModel,
                name: dto.name,
                birthday: dto.birthday,
                email: dto.email,
                phone: dto.phone,
                education: dto.education,
                genre: dto.genre,
                sexualOrientation: dto.sexualOrientation,
                country: dto.country,
                state: dto.state,
                city: dto.city
            }        
            
            const personUpdated: PersonModel = await this._personDAO.save(personUpdateModel)
           
            if (file) {
                try {
                    const url = await GoogleCloudStorageUtils.Upload(personUpdated.code.toString(), file, `person/${personUpdated.code}/profile/picture/`)
                    await this._personDAO.update({ code: personUpdated.code }, { url_image: url })
                    console.log('saved sucess!')
                } catch (error) {
                    console.log('ERRO', error)
                }
            }
    
            return this._personDAO.findOne(personUpdated.code)
    
        }
    
        async delete(code: number) {
    
            const personModel = await this._personDAO.findOne(code)
    
            if (!personModel)
                throw new NotFoundException(`Pessoa de código ${code} não foi econtrada.`)
    
    
            await this._personDAO.delete(code)
        }
    */
}