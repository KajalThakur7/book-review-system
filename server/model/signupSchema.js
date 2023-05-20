const Joi = require('joi'); 

const signupSchema = Joi.object({
    username: Joi.string().required().min(3).max(20),
    email: Joi.string().email().required(),
    dateOfBirth: Joi.date().iso().max('now').required(),
    role: Joi.string(),
    is_active: Joi.boolean(),
    is_deleted: Joi.boolean(),
    password: Joi.string().min(6).required(),
  });

  module.exports = signupSchema