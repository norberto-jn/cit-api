import { InjectRepository } from "@nestjs/typeorm";
import { GenericDAO } from "src/common/database/dao/GenericDAO";
import { Repository } from "typeorm";
import { PersonModel } from "../models/PersonModel";

export class PersonDAO extends GenericDAO<PersonModel> {

    constructor(
        @InjectRepository(PersonModel)
        private readonly _personRepository: Repository<PersonModel>
    ) {
        super(_personRepository);
    }


    /*async getByCode(code: number): Promise<PersonModel> {

        const query = await this._createQueryBuilder()

        query.addSelect('voter.politicianCode')

        query.leftJoinAndSelect('person.voter', 'voter')
        query.leftJoinAndSelect('voter.politician', 'politician')
        query.leftJoinAndSelect('person.politician', 'userPolitician')
        query.leftJoinAndSelect('politician.person', 'personPolitician')

        query.where('person.code=:code', { code })

        //query.andWhere('voter.voteActive=:active', { active: true })
        //query.andWhere('voter.personVoteCode=:code', { code })

        return query.getOne()
    }

    async validateEmailByCode(code: number, email: string): Promise<PersonModel> {

        const query = await this._createQueryBuilder()

        query.where('person.code=:code', { code })
        query.andWhere('person.email=:email', { email })

        return query.getOne()
    }


    async validatePhoneByCode(code: number, phone: string): Promise<PersonModel> {

        const query = await this._createQueryBuilder()

        query.where('person.code=:code', { code })
        query.andWhere('person.phone=:phone', { phone })

        return query.getOne()
    }

    private async _createQueryBuilder(): Promise<SelectQueryBuilder<PersonModel>> {
        return this.createQueryBuilder()
            .select("person")
            .from(PersonModel, "person")
    }*/
}


