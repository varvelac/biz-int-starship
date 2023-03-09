/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
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
