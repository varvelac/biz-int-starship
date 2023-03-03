export class CreateChatDto {}

export class PromptChatDto {
  model: string;
  prompt: string;
  max_tokens: number;
  temperature: number;
  prefixes: string[];
  // top_p: number;
  // presence_penalty: number;
  // frequency_penalty: number;
  // best_of: number;
  // n: number;
  // stream: boolean;
  // logprobs: number;
  // echo: boolean;
  // stop: string[];
}

export class PromptPrefixDto {
  name: string;
  value: string;

}