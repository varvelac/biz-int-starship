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
import { Document } from "mongoose";
export type PromptPrefixesDocument = PromptPrefixes & Document;
export type TwilioDocument = Twilio & Document;
export type ChatHistoryDocument = ChatHistory & Document;
export declare class PromptPrefixes {
    name: string;
    prompt: string;
    description: string;
}
export declare class Twilio {
    Body: string;
    From: string;
    SmsMessageSid: string;
    ToCountry: string;
    ToState: string;
    NumMedia: string;
    ToCity: string;
    FromZip: string;
    SmsSid: string;
    FromState: string;
    SmsStatus: string;
    FromCity: string;
    FromCountry: string;
    To: string;
    ToZip: string;
    NumSegments: string;
    MessageSid: string;
    AccountSid: string;
    ApiVersion: string;
}
export declare class ChatHistory {
    SmsMessageSid: string;
    history: any[];
    From: string;
    To: string;
    active: boolean;
}
export declare const PromptPrefixesSchema: import("mongoose").Schema<PromptPrefixes, import("mongoose").Model<PromptPrefixes, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, PromptPrefixes>;
export declare const TwilioSchema: import("mongoose").Schema<Twilio, import("mongoose").Model<Twilio, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Twilio>;
export declare const ChatHistorySchema: import("mongoose").Schema<ChatHistory, import("mongoose").Model<ChatHistory, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, ChatHistory>;
