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
import { Document } from 'mongoose';
export type ShelterDocument = Shelter & Document;
export type QuizDocument = Quiz & Document;
export declare class Shelter {
    name: string;
    unit_type: string;
    number_of_units: number;
    number_of_available: number;
    tags: string[];
    date_added: Date;
}
export declare class Quiz {
    name: string;
    quiz_id: string;
    category: string;
    questions: any[];
}
export declare const ShelterSchema: import("mongoose").Schema<Shelter, import("mongoose").Model<Shelter, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Shelter>;
export declare const QuizSchema: import("mongoose").Schema<Quiz, import("mongoose").Model<Quiz, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Quiz>;
