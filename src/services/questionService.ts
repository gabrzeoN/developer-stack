import * as questionRepository from "./../repositories/questionRepository.js";

export async function create(question: string) {
    await questionRepository.create(question);
    return;
}
export async function getAll() {
    const questions = await questionRepository.getAll();
    return questions;
}

export async function getById(questionId: number) {
    const question = await questionRepository.getById(questionId);
    return question;
}