import { Injectable } from '@nestjs/common';
import { PromptChatDto } from './dto/create-chat.dto';
import { UpdateChatDto } from './dto/update-chat.dto';
import { OpenAIApi, Configuration } from 'openai';
require('dotenv').config();

@Injectable()
export class ChatsService {
   configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
  });
   openai = new OpenAIApi(this.configuration);
  
  async prompt(promptChatDto: PromptChatDto) {
    console.log('prompt', promptChatDto)
  
    const completion = await this.openai.createCompletion(promptChatDto);
    console.log('completion', completion)
    return completion.data;
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
