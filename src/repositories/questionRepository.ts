import { Question } from "@prisma/client";
import { prisma } from "../config/database.js";

export type QuestionInputData = Omit<Question, "id">;

export async function create(question: string) {
    await prisma.question.create({data: {question}});
}

export async function getAll() {
    const questions = await prisma.question.findMany();
    return questions;
}

export async function getById(questionId: number) {
    const questions = await prisma.question.findUnique({
        where: {id: questionId},
        include: {
            Answer: {
                select: {answer: true}
            }
        }
    });
    return questions;
}