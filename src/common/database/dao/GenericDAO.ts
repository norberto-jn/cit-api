import { FindManyOptions, FindOneOptions, FindOptionsWhere, MoreThanOrEqual, Repository } from "typeorm"
import { QueryDeepPartialEntity } from "typeorm/query-builder/QueryPartialEntity"
import { GenericModel } from "../model/GenericModel"

export abstract class GenericDAO<Entity extends GenericModel>  {

    protected constructor(protected readonly _repository: Repository<Entity>) { }

    async save(object?: Entity): Promise<Entity> {

        if (object)
            return this._repository.save<any>(object, { reload: true })
            
        return this._repository.save<any>({ reload: true })
    }

    async saveBook(object: Entity[]): Promise<Entity[]> {
        return this._repository.save<any>(object, { reload: true })
    }

    async find(objectFindManyOptions?: FindManyOptions<Entity>, objectFindConditions?: FindManyOptions<Entity>) {
        const options1 = objectFindManyOptions
        const options2 = objectFindConditions
        if (options1) {
            return this._repository.find(options1)
        } else if (options2) {
            return this._repository.find()
        }
        return this._repository.find()
    }

    async findOne(obj?: FindOptionsWhere<Entity>): Promise<Entity | undefined> {
        return this._repository.findOneBy({...obj})
    }

    async delete(object: Entity): Promise<Entity> {
        return this._repository.remove(object)
    }

    async remove(object: Entity[]): Promise<Entity[]> {
        return this._repository.remove(object)
    }

    async partialUpdate(code: number, partialEntity: QueryDeepPartialEntity<Entity>): Promise<void> {
        await this._repository.update(code, partialEntity)
    }
}