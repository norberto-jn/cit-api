import { AuthModel } from "src/auth/src/models/AuthModel"
import { CountryEnum } from "src/common/enums/CountryEnum"
import { GenreEnum } from "src/common/enums/GenreEnum"
import { StateEnum } from "src/common/enums/StateEnum"
import { ExcavationModel } from "src/excavation/src/models/ExcavationModel"
import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm"

@Entity('person')
export class PersonModel {

    @PrimaryGeneratedColumn({ name: 'code' })
    code?: number

    @Column({ name: 'name' })
    name: string

    @Column({ name: 'birthday', type: 'date', nullable: true })
    birthday: Date

    @Column({ name: 'email', unique: true })
    email: string

    @Column({ name: 'phone', unique: true })
    phone: string

    @Column({ name: 'genre', type: 'enum', enum: GenreEnum })
    genre: GenreEnum

    @Column({ name: 'country', type: 'enum', enum: CountryEnum })
    country: CountryEnum

    @Column({ name: 'state', type: 'enum', enum: StateEnum })
    state: StateEnum

    @Column({ name: 'city' })
    city: string

    @OneToOne(() => AuthModel, { cascade: true })    
    auth?: AuthModel

    @OneToMany(() => ExcavationModel, excavation => excavation.person)
    excavations?: ExcavationModel[];
    
}