import { QuizService } from './quiz.service';
import { Shelter, Quiz } from './quiz.models';
import { ShelterUpdateDto } from './quizUpdate.dto';
export declare class QuizController {
    private readonly quiz_service;
    constructor(quiz_service: QuizService);
    createShelter(userDto: Shelter): Promise<Shelter>;
    readShelter(): Promise<void | (Shelter & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    updateShelter(id: string, updateData: ShelterUpdateDto): Promise<Shelter>;
    deleteShelter(id: string): Promise<Shelter & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    readQuizzes(): Promise<void | (Quiz & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    readQuizById(id: string): Promise<void | (Quiz & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })>;
    createQuiz(userDto: Quiz): Promise<Quiz>;
}
