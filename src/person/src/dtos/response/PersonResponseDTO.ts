import { CountryEnum } from "src/common/enums/CountryEnum"
import { EducationEnum } from "src/common/enums/EducationEnum"
import { GenreEnum } from "src/common/enums/GenreEnum"
import { StateEnum } from "src/common/enums/StateEnum"
import { PersonModel } from "../../models/PersonModel"

export class PersonResponseDTO {

    code?: number
    name: string
    email: string
    phone: string
    genre: GenreEnum
    country: CountryEnum
    state: StateEnum
    city: string
    birthday: Date
    education:EducationEnum
    politician:any


    constructor(data: PersonModel) {     
        this.code = data.code
        this.name = data.name
        this.email = data.email
        this.phone = data.phone
        this.genre = data.genre
        this.country = data.country
        this.state = data.state
        this.city = data.city,
        this.birthday = data.birthday
    }
}