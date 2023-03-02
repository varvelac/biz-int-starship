export class CreateChatDto {}

export class PromptChatDto {
  model: string;
  prompt: string;
  max_tokens: number;
  temperature: number;
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