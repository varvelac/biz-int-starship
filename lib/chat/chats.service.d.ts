import { PromptChatDto, PromptPrefixDto } from "./dto/create-chat.dto";
import { UpdateChatDto } from "./dto/update-chat.dto";
import { PromptPrefixesDocument, TwilioDocument } from "./entities/chat.entity";
import { Model } from "mongoose";
export declare class ChatsService {
    private readonly prefixModel;
    private readonly twilioModel;
    private configuration;
    private openai;
    constructor(prefixModel: Model<PromptPrefixesDocument>, twilioModel: Model<TwilioDocument>);
    prompt(promptData: PromptChatDto): Promise<import("openai").CreateCompletionResponse>;
    addPrefix(prefix: PromptPrefixDto): Promise<import("./entities/chat.entity").PromptPrefixes & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    readPrefixes(): Promise<void | (import("./entities/chat.entity").PromptPrefixes & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    sendText(payload: any): Promise<void>;
    receiveText(payload: any): Promise<any>;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateChatDto: UpdateChatDto): string;
    remove(id: number): string;
}
