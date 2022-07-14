import * as answerRepository from "./../repositories/answerRepository.js";

export async function create(questionId: number, answer: string) {
//TODO: if(!question)

    await answerRepository.create(questionId, answer);
    return;
}
