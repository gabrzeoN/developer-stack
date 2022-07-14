import Joi from "joi";
import { QuestionInputData } from "../repositories/questionRepository";

export const questionSchema = Joi.object<QuestionInputData>({
  question: Joi.string().required()
});
