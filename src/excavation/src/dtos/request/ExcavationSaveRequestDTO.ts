import { IsEmail, IsNotEmpty } from "class-validator"

export class ExcavationSaveRequestDTO {

    @IsNotEmpty()
    name: string
    
    @IsNotEmpty()
    description: string

    @IsNotEmpty()
    latitude: string

    @IsNotEmpty()
    longitude: string

    @IsNotEmpty()
    altitude: string
    
}