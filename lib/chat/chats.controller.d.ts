import { ChatsService } from './chats.service';
import { PromptChatDto, PromptPrefixDto } from './dto/create-chat.dto';
import { UpdateChatDto } from './dto/update-chat.dto';
export declare class ChatsController {
    private readonly chatsService;
    constructor(chatsService: ChatsService);
    prompt(promptChatDto: PromptChatDto): Promise<import("openai").CreateCompletionResponse>;
    addPrefix(promptPrefixDto: PromptPrefixDto): Promise<import("./entities/chat.entity").PromptPrefixes & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    readPrefixes(): Promise<void | (import("./entities/chat.entity").PromptPrefixes & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    findOne(id: string): string;
    update(id: string, updateChatDto: UpdateChatDto): string;
    remove(id: string): string;
}
