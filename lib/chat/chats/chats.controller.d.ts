import { ChatsService } from './chats.service';
import { PromptChatDto } from './dto/create-chat.dto';
import { UpdateChatDto } from './dto/update-chat.dto';
export declare class ChatsController {
    private readonly chatsService;
    constructor(chatsService: ChatsService);
    prompt(promptChatDto: PromptChatDto): Promise<import("openai").CreateCompletionResponse>;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateChatDto: UpdateChatDto): string;
    remove(id: string): string;
}
