import { Shelter, Quiz, ShelterDocument, QuizDocument } from "./quiz.models";
import { Model } from "mongoose";
export declare class QuizService {
    private readonly shelterModel;
    private readonly quizModel;
    constructor(shelterModel: Model<ShelterDocument>, quizModel: Model<QuizDocument>);
    createShelter(shelter: Shelter): Promise<Shelter>;
    readShelter(): Promise<void | (Shelter & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    updateShelter(id: any, data: any): Promise<Shelter>;
    deleteShelter(id: any): Promise<Shelter & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    readQuizzes(): Promise<void | (Quiz & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    createQuiz(quiz: Quiz): Promise<Quiz>;
    readQuizById(id: any): Promise<void | (Quiz & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })>;
    getRandomQuestions(category: string): Promise<void | Quiz>;
}
