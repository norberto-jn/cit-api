import { IsEmail, IsEnum, IsHash, IsNotEmpty, IsNumber } from "class-validator"
import { CountryEnum } from "src/common/enums/CountryEnum"
import { EducationEnum } from "src/common/enums/EducationEnum"
import { GenreEnum } from "src/common/enums/GenreEnum"
import { StateEnum } from "src/common/enums/StateEnum"

export class PersonRequestDTO {

    @IsNotEmpty()
    name: string
    
    @IsNotEmpty()
    birthday: Date

    @IsEmail()
    email: string

    @IsNotEmpty()
    phone: string

    @IsNotEmpty()
    @IsEnum(EducationEnum)
    education: EducationEnum

    @IsNotEmpty()
    @IsEnum(GenreEnum)
    genre: GenreEnum

    @IsNotEmpty()
    @IsEnum(CountryEnum)
    country: CountryEnum

    @IsNotEmpty()
    @IsEnum(StateEnum)
    state: StateEnum

    @IsNotEmpty()
    city: string

    @IsNotEmpty()
    @IsHash('md5')
    password: string
}