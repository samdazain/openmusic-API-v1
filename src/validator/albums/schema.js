const Joi = require('joi');

const AlbumPayloadSchema = Joi.object({
  name: Joi.string().required(),
  year: Joi.number().integer().min(1945).max(2023)
    .required(),
});

module.exports = { AlbumPayloadSchema };
