import { PromptChatDto, PromptPrefixDto } from "./dto/create-chat.dto";
import { ChatHistory, ChatHistoryDocument, PromptPrefixesDocument, TwilioDocument } from "./entities/chat.entity";
import { Model } from "mongoose";
export declare class ChatsService {
    private readonly prefixModel;
    private readonly twilioModel;
    private readonly chatHistoryModel;
    private configuration;
    private openai;
    constructor(prefixModel: Model<PromptPrefixesDocument>, twilioModel: Model<TwilioDocument>, chatHistoryModel: Model<ChatHistoryDocument>);
    prompt(promptData: PromptChatDto): Promise<import("openai").CreateCompletionResponse>;
    addPrefix(prefix: PromptPrefixDto): Promise<import("./entities/chat.entity").PromptPrefixes & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    readPrefixes(): Promise<void | (import("./entities/chat.entity").PromptPrefixes & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    sendText(payload: any): Promise<void>;
    receiveText(payload: any): Promise<any>;
    saveChatHistory(payload: any): Promise<ChatHistory & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findOneChatHistory(from_number: string): Promise<void | ChatHistory>;
    updateChatHistory(payload: any): Promise<void | (ChatHistory & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })>;
    formatHistory(history: any): any;
    deactivateChatHistory(payload: any): Promise<void | (ChatHistory & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })>;
    remove(id: number): string;
    findAll(): string;
}
