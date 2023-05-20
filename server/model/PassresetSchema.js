const Joi = require("joi");

const resetPasswordSchema = Joi.object({
  email: Joi.string().email().required(),
  newPassword: Joi.string().min(6).required(),
});

module.exports = resetPasswordSchema;
