import { PromptChatDto } from './dto/create-chat.dto';
import { UpdateChatDto } from './dto/update-chat.dto';
import { OpenAIApi, Configuration } from 'openai';
export declare class ChatsService {
    configuration: Configuration;
    openai: OpenAIApi;
    prompt(promptChatDto: PromptChatDto): Promise<import("openai").CreateCompletionResponse>;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateChatDto: UpdateChatDto): string;
    remove(id: number): string;
}
