import Joi from 'joi';

export const scriptureValidationSchema = Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required(),
    category: Joi.string().valid('Veda', 'Upanishad', 'Puran', 'Bhagavad Gita').required(),
    verse: Joi.string().optional()
});
