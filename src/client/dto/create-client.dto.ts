import Joi from 'joi';

const CreateClientDto = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  cellphone: Joi.number().required(),
  city: Joi.string().required(),
});
export { CreateClientDto };
