import { ExecutionContext } from "@nestjs/common"
import * as _ from 'lodash'

export class MetadataResponseDTO {

    type: string
    start: number
    limit: number
    total: number

    constructor(request: ExecutionContext, data: any) {
        if (data) {

            this.type = this.checkListOrItemType(data)

            this.getPaginationValues(request, data)

            this.total = this.getTotal(data)

        }
    }

    checkListOrItemType(data): string {

        if (data.data || _.isArray(data)) {
            return 'list'
        }

        return 'item'

    }

    getPaginationValues(request: ExecutionContext, data: any) {

        let start = 1
        let limit = 1

        if (data.data) {

            if (request.getArgByIndex(0).query.start)
                start = request.getArgByIndex(0).query.start

            if (request.getArgByIndex(0).query.limit)
                limit = request.getArgByIndex(0).query.limit

        } else {

            if (_.isArray(data)) {
                start = data.length > 0 ? 1 : 0
                limit = data.length
            } else {
                start = undefined
                limit = undefined
            }

        }

        return (
            this.start = start,
            this.limit = limit
        )
    }

    getTotal(data): number {

        if (_.isNumber(data?.total))
            return data.total
        else {
            if (_.isArray(data))
                return data.length
        }

    }


}