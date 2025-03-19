import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtStrategy } from 'src/auth/src/services/JwtStrategy';
import { JwtStrategyCookie } from 'src/auth/src/services/JwtStrategyCookie';
import { PersonController } from 'src/person/src/PersonController';
import { PersonDAO } from 'src/person/src/dao/PersonDAO';
import { PersonManager } from 'src/person/src/services/PersonManager';
import { DataSourceOptions } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './auth/src/AuthController';
import { AuthDAO } from './auth/src/dao/AuthDAO';
import { AuthModel } from './auth/src/models/AuthModel';
import { AuthManager } from './auth/src/services/AuthManager';
import { Database } from './common/configdatabase/DatabaseConnectionOptions';
import { PersonModel } from './person/src/models/PersonModel';
import { ExcavationController } from 'src/excavation/src/ExcavationController';
import { ExcavationManager } from 'src/excavation/src/services/ExcavationManager';
import { ExcavationModel } from 'src/excavation/src/models/ExcavationModel';
import { ExcavationDAO } from 'src/excavation/src/dao/ExcavationDAO';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...Database.getConnectionOptions<DataSourceOptions>(),
      ssl: false,
    }),
    TypeOrmModule.forFeature([AuthModel, PersonModel, ExcavationModel]),
  ],
  controllers: [AppController, PersonController, AuthController, ExcavationController],
  providers: [
    AppService,
    AuthManager,
    PersonManager,
    PersonDAO,
    AuthDAO,
    ExcavationManager,
    ExcavationDAO,
    JwtService,
    JwtStrategy,
    JwtStrategyCookie
  ],
})
export class AppModule { }