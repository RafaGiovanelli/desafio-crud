import { IsNotEmpty, IsPhoneNumber, IsString } from 'class-validator';

export class CreateClientDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsString()
  readonly email: string;

  @IsNotEmpty()
  @IsPhoneNumber('BR')
  readonly cellphone: number;

  @IsNotEmpty()
  @IsString()
  readonly city: string;
}

// import Joi from 'joi';

// const CreateClientDto = Joi.object({
//   name: Joi.string().required(),
//   email: Joi.string().email().required(),
//   cellphone: Joi.number().required(),
//   city: Joi.string().required(),
// });
// export { CreateClientDto };
