import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common"
import { map, Observable } from "rxjs"
import { MetadataResponseDTO } from "src/common/dtos/responses/MetadataResponseDTO"

interface Response<T> {
    data: T
}

@Injectable()
export class TransformInterceptor<T> implements NestInterceptor<T, Response<T>> {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {

        console.log(`\n${Date()}\n`)
        console.log('METHOD : ', context.getArgs()[1].socket.parser.incoming.method)
        console.log('URL : ', context.getArgs()[1].socket.parser.incoming.url)

        const now = Date.now()

        return next
            .handle()
            .pipe(
                map(data => ({
                    metadata: new MetadataResponseDTO(context, data),
                    data: data?.data ?? data ?? {}
                })),
            )
    }
}