import {
  IsEmail,
  IsEmpty,
  IsOptional,
  IsPhoneNumber,
  IsString,
} from 'class-validator';
import { User } from '../../auth/schemas/user.schemas';

export class UpdateClientDto {
  @IsOptional()
  @IsString()
  readonly name: string;

  @IsOptional()
  @IsEmail({}, { message: 'Digite o email corretamente' })
  readonly email: string;

  @IsOptional()
  @IsPhoneNumber('BR')
  readonly cellphone: number;

  @IsOptional()
  @IsString()
  readonly city: string;

  @IsEmpty({ message: 'Você não pode passar o ID do usuário' })
  readonly user: User;
}

// import Joi from 'joi';

// const UpdateClientDto = Joi.object({
//   name: Joi.string().required(),
//   email: Joi.string().email().required(),
//   cellphone: Joi.number().required(),
//   city: Joi.string().required(),
// });
// export { UpdateClientDto };
