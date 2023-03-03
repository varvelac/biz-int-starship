import { PromptChatDto, PromptPrefixDto } from './dto/create-chat.dto';
import { UpdateChatDto } from './dto/update-chat.dto';
import { PromptPrefixesDocument } from './entities/chat.entity';
import { Model } from 'mongoose';
export declare class ChatsService {
    private readonly prefixModel;
    private configuration;
    private openai;
    constructor(prefixModel: Model<PromptPrefixesDocument>);
    prompt(promptData: PromptChatDto): Promise<import("openai").CreateCompletionResponse>;
    addPrefix(prefix: PromptPrefixDto): Promise<import("./entities/chat.entity").PromptPrefixes & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    readPrefixes(): Promise<void | (import("./entities/chat.entity").PromptPrefixes & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateChatDto: UpdateChatDto): string;
    remove(id: number): string;
}
