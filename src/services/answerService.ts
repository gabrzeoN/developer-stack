import * as answerRepository from "./../repositories/answerRepository.js";
import * as questionRepository from "./../repositories/questionRepository.js";

export async function create(questionId: number, answer: string) {
    const question = await questionRepository.getById(questionId);
    if(!question){
        throw {type: "notFound", message: "Question does not exist!"}; 
    }

    await answerRepository.create(questionId, answer);
    return;
}
