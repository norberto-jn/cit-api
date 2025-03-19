import { InjectRepository } from "@nestjs/typeorm";
import { GenericDAO } from "src/common/database/dao/GenericDAO";
import { ExcavationModel } from "src/excavation/src/models/ExcavationModel";
import { Repository } from "typeorm";

export class ExcavationDAO extends GenericDAO<ExcavationModel> {

    constructor(
        @InjectRepository(ExcavationModel)
        private readonly _excavationRepository: Repository<ExcavationModel>
    ) {
        super(_excavationRepository);
    }

}


