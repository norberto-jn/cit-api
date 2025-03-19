import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TransformInterceptor } from './common/interceptors/TransformInterceptor';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.useGlobalPipes(new ValidationPipe())
    app.useGlobalInterceptors(new TransformInterceptor())

    app.use(cookieParser());

    app.enableCors({
        origin: process.env.APP_FRONTEND_URL ?? 'http://localhost:3545',
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
        allowedHeaders: 'Content-Type,Authorization',
        credentials: true,
    });

    await app.listen(3541);
}
bootstrap();