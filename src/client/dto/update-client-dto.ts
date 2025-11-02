import { IsOptional, IsPhoneNumber, IsString } from 'class-validator';

export class UpdateClientDto {
  @IsOptional()
  @IsString()
  readonly name: string;

  @IsOptional()
  @IsString()
  readonly email: string;

  @IsOptional()
  @IsPhoneNumber('BR')
  readonly cellphone: number;

  @IsOptional()
  @IsString()
  readonly city: string;
}

// import Joi from 'joi';

// const UpdateClientDto = Joi.object({
//   name: Joi.string().required(),
//   email: Joi.string().email().required(),
//   cellphone: Joi.number().required(),
//   city: Joi.string().required(),
// });
// export { UpdateClientDto };
