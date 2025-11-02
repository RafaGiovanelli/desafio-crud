import Joi from 'joi';

const UpdateClientDto = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  cellphone: Joi.number().required(),
  city: Joi.string().required(),
});
export { UpdateClientDto };
