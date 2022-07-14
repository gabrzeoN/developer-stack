import { Answer } from "@prisma/client";
import { prisma } from "../config/database.js";

export type AnswerInputData = Omit<Answer, "id" | "questionId">;

export async function create(questionId: number, answer: string) {
    await prisma.answer.create({data: {questionId, answer}});
}