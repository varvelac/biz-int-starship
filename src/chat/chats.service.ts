import { Injectable } from '@nestjs/common';
import { PromptChatDto, PromptPrefixDto } from './dto/create-chat.dto';
import { UpdateChatDto } from './dto/update-chat.dto';
import { OpenAIApi, Configuration } from 'openai';
import { InjectModel } from "@nestjs/mongoose";
import { PromptPrefixesDocument } from './entities/chat.entity';
import { Model } from 'mongoose';


@Injectable()
export class ChatsService {
  private configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
  private openai = new OpenAIApi(this.configuration);

  constructor(
    @InjectModel("prefixes") private readonly prefixModel: Model<PromptPrefixesDocument>
  ) {}
  
  async prompt(promptData: PromptChatDto) {
    console.log('prompt', promptData)
    const payload = {
      prompt: promptData.prefixes.join('. ') + promptData.prompt,
      max_tokens: promptData.max_tokens,
      temperature: promptData.temperature,
      model: promptData.model,
    }
  
    const completion = await this.openai.createCompletion(payload);
    console.log('completion', completion)
    return completion.data;
  }

  async addPrefix(prefix: PromptPrefixDto) {
    const newPrefix = new this.prefixModel(prefix);
    return newPrefix.save();
  }

  async readPrefixes() {
    return this.prefixModel
      .find({})
      .then((prefixes) => {
        return prefixes;
      })
      .catch((err) => console.log(err));
  }

  findAll() {
    return `This action returns all chats`;
  }

  findOne(id: number) {
    return `This action returns a #${id} chat`;
  }

  update(id: number, updateChatDto: UpdateChatDto) {
    return `This action updates a #${id} chat`;
  }

  remove(id: number) {
    return `This action removes a #${id} chat`;
  }
}
