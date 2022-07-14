import { Request, Response } from "express";
import { AnswerInputData } from "../repositories/answerRepository.js";
import { QuestionInputData } from "../repositories/questionRepository.js";
import * as answerService from "../services/answerService.js";
import * as questionService  from "../services/questionService.js";

export async function create(req: Request, res: Response) {
  const { question } : QuestionInputData = req.body;
  await questionService.create(question);
  res.sendStatus(201);
}

export async function answer(req: Request, res: Response) {
  const  questionId: number = parseInt(req.params.id);
  const { answer } : AnswerInputData = req.body;

  if(!questionId){
    throw {type: "badRequest", message: "Question's ID must be a number!"}; 
  }

  await answerService.create(questionId, answer);
  res.sendStatus(201);
}

export async function get(req: Request, res: Response) {
  const questions = await questionService.getAll();
  res.status(200).send(questions);
}

export async function getById(req: Request, res: Response) {
  const  questionId: number = parseInt(req.params.id);

  if(!questionId){
    throw {type: "badRequest", message: "Question's ID must be a number!"}; 
  }

  const question = await questionService.getById(questionId);
  res.status(200).send(question);
}
