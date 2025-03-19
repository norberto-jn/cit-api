import { PersonModel } from "src/person/src/models/PersonModel";
import { Column, Entity, ManyToOne, JoinColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('excavation')
export class ExcavationModel {

    @PrimaryGeneratedColumn({ name: 'code' })
    code?: number;

    @Column({ name: 'name' })
    name: string;

    @Column({ name: 'description' })
    description: string;

    @Column({ name: 'latitude' })
    latitude: string;

    @Column({ name: 'longitude' })
    longitude: string;

    @Column({ name: 'altitude' })
    altitude: string;

    @Column({ name: 'createdbyusercode' })
    createdByUserCode: number;

    @ManyToOne(() => PersonModel, person => person.excavations, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'createdbyusercode' })
    person?: PersonModel;
}
