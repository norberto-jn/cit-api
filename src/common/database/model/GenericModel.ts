import { CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

export abstract class GenericModel {

    @PrimaryGeneratedColumn({ name: 'code' })
    code?: number

    @CreateDateColumn({ type: 'timestamp without time zone', name: 'created_at' })
    createdAt?: Date

    @UpdateDateColumn({ type: 'timestamp without time zone', name: 'updated_at' })
    updatedAt?: Date

}