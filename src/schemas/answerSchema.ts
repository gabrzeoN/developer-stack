import Joi from "joi";
import { AnswerInputData } from "../repositories/answerRepository";

export const answerSchema = Joi.object<AnswerInputData>({
  answer: Joi.string().required(),
});
