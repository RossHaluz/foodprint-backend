const joi = require("joi");

const registerSchema = joi.object({
  firstName: joi.string().required(),
  lastName: joi.string().required(),
  email: joi.string().email().required(),
  password: joi.string().min(6).required(),
  phoneNumber: joi.string().optional(),
});

const loginSchema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().required(),
});

const productSchema = joi.object({
  title: joi.string().required(),
  article: joi.alternatives().try(joi.string(), joi.number()),
  price: joi.number(),
  position: joi.number().default(1),
  type: joi.string().default("main"),
  isFeatured: joi.boolean().default(false),
  isArchived: joi.boolean().default(false),
  description: joi.string().allow(""),
  backgroundColor: joi.string().allow(""),
  textColor: joi.string().allow(""),
  categories: joi.array().items(
    joi.object({
      categoryId: joi.string().required(),
    })
  ),
  translations: joi.array().items(
    joi.object({
      languageCode: joi.string().required(),
      title: joi.string().required(),
      description: joi.string().allow(""),
    })
  ),
});

const validateProductData = (data) =>
  productSchema.validate(data, { abortEarly: false });

module.exports = {
  registerSchema,
  loginSchema,
  validateProductData,
};
