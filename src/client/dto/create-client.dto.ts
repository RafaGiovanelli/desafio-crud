import {
  IsEmail,
  IsEmpty,
  IsNotEmpty,
  IsPhoneNumber,
  IsString,
} from 'class-validator';
import { User } from '../../auth/schemas/user.schemas';

export class CreateClientDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsEmail({}, { message: 'Digite o email corretamente' })
  readonly email: string;

  @IsNotEmpty()
  @IsPhoneNumber('BR')
  readonly cellphone: number;

  @IsNotEmpty()
  @IsString()
  readonly city: string;

  @IsEmpty({ message: 'Você não pode passar o ID do usuário' })
  readonly user: User;
}

// import Joi from 'joi';

// const CreateClientDto = Joi.object({
//   name: Joi.string().required(),
//   email: Joi.string().email().required(),
//   cellphone: Joi.number().required(),
//   city: Joi.string().required(),
// });
// export { CreateClientDto };
