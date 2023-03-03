export declare class CreateChatDto {
}
export declare class PromptChatDto {
    model: string;
    prompt: string;
    max_tokens: number;
    temperature: number;
    prefixes: string[];
}
export declare class PromptPrefixDto {
    name: string;
    value: string;
}
