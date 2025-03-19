import { registerDecorator, ValidationArguments, ValidationOptions, Validator, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator"

@ValidatorConstraint()
class IsRequiredConstraint implements ValidatorConstraintInterface {

    validate(value: string, args: ValidationArguments): boolean {

        const validator = new Validator()
        for (const item of args.constraints) {
            if (Object.values(item).includes(value)) 
                return true
            
        }
        return false

    }

    defaultMessage(args: ValidationArguments): string {
        return 'region deve ser um valor enum válido'
    }
}

export function IsEnumsValidate(enums: object[], validationOptions?: ValidationOptions) {
    return (object: {}, propertyName: string) => {
        registerDecorator({
            target: object.constructor,
            propertyName,
            options: validationOptions,
            constraints: enums,
            validator: IsRequiredConstraint
        })
    }
}
