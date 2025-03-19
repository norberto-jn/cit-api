import { IsEmail, IsNotEmpty, IsOptional } from "class-validator"

export class ExcavationUpdateRequestDTO {

    @IsOptional()
    name?: string

    @IsOptional()
    description?: string

    @IsOptional()
    latitude?: string

    @IsOptional()
    longitude?: string

    @IsOptional()
    altitude?: string

}