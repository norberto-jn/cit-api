import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { GenericDAO } from "src/common/database/dao/GenericDAO";
import { Repository, SelectQueryBuilder } from "typeorm";
import { AuthModel } from "../models/AuthModel";

@Injectable()
export class AuthDAO extends GenericDAO<AuthModel> {

    constructor(
        @InjectRepository(AuthModel)
        private readonly _examRepository: Repository<AuthModel>
    ) {
        super(_examRepository);
    }

    async getByUsername(username: string) {

        const query = await this._createQueryBuilder()

        query.leftJoinAndSelect('auth.person', 'person')

        query.where('person.email =:username', { username })

        return query.getOne()
    }

    private async _createQueryBuilder(): Promise<SelectQueryBuilder<AuthModel>> {
        return this._examRepository.createQueryBuilder()
            .select("auth")
            .from(AuthModel, "auth")
    }

}