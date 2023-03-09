import { Injectable } from "@nestjs/common";
import { PromptChatDto, PromptPrefixDto } from "./dto/create-chat.dto";
import { OpenAIApi, Configuration } from "openai";
import { InjectModel } from "@nestjs/mongoose";
import {
  ChatHistory,
  ChatHistoryDocument,
  PromptPrefixesDocument,
  TwilioDocument,
} from "./entities/chat.entity";
import { Model } from "mongoose";



const { MessagingResponse } = require("twilio").twiml;

@Injectable()
export class ChatsService {
  
  private configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  private openai = new OpenAIApi(this.configuration);

  constructor(
    @InjectModel("prefixes")
    private readonly prefixModel: Model<PromptPrefixesDocument>,
    @InjectModel("twilio")
    private readonly twilioModel: Model<TwilioDocument>,
    @InjectModel("chatHistory")
    private readonly chatHistoryModel: Model<ChatHistoryDocument>
  ) {
    
  }

  async prompt(promptData: PromptChatDto) {
    const payload = {
      prompt: `${promptData.prefixes}. ${promptData.prompt}`,
      max_tokens: promptData.max_tokens,
      temperature: promptData.temperature,
      model: promptData.model,
    };
    console.log("payload on prompt service", payload);
    const completion = await this.openai.createCompletion(payload);
    console.log("completion", completion);
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

  async sendText(payload: any) {
    const accountSid = "ACcd1c1db93a7a6029024760d8f1a36a23";
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const client = require("twilio")(accountSid, authToken);
    client.messages
      .create({
        body: payload.body,
        from: payload.from,
        to: "+19048149534",
      })
      .then((message) => console.log(message.sid));
  }

  async receiveText(payload: any) {
    // let completion;
    const convertedToLog = new this.twilioModel(payload);
    const twiml = new MessagingResponse();

    console.log(payload);
    convertedToLog.save();
    switch (true) {
      case payload.Body.includes("/r"):
        this.deactivateChatHistory(payload)
        twiml.message("new conversation");
        break;
      case payload.Body.includes("/h"):
        twiml.message(`Commands:
        /refresh - refreshes the chatbot. The chatbot will forget the conversation and start over.
        /help - list all helpful commands for the chatbot`);
        break;

      default:
        const { OpenAI } = await import("langchain/llms");
        const { LLMChain } = await import("langchain/chains");
        const { BufferMemory } = await import("langchain/memory");
        const { PromptTemplate } = await import("langchain/prompts");

        const chat_history = await this.findOneChatHistory(payload.From);
        // add interface for history_log
        const history_log: any[] = chat_history ? chat_history["history"] : [];
        let fallbackHistory: string = '';
        const user_input: string = payload.Body

        const llm = new OpenAI({
          openAIApiKey: process.env.OPENAI_API_KEY,
          temperature: 0.5,
          maxTokens: 100,
        });

        const memory = new BufferMemory({
          memoryKey: "chat_history",
          returnMessages: true,
        });

        if (history_log) {
          for (let i = 0; i < history_log.length; i++) {
            memory.saveContext(
              { input: history_log[i].input },
              { output: history_log[i].output }
            );
          }
          fallbackHistory = this.formatHistory(history_log);
        }

        //VERY  IMPORTANT.  FIGURE OUT HOW TO GET THE CHAT HISTORY INTO THE MEMORY BUFFER TO WORK
        const template = `The following is a friendly conversation between a human and an AI. The AI is talkative and provides lots of specific details from its context. If the AI does not know the answer to a question, it truthfully says it does not know. Answer in the voice of a sexy vixen who is a bit of a flirt.
        Current conversation:
        ${fallbackHistory}
        {chat_history}
        Human: {input}
        AI:`;

        const prompt = PromptTemplate.fromTemplate(template);

        const chain = new LLMChain({
          prompt,
          memory,
          llm,
        });

        const res = await chain.call({ input: user_input });

        if (!chat_history) {
          payload.history = [{ input: user_input, output: res.text }];
          payload.active = true;
          this.saveChatHistory(payload);
        } else {
          this.updateChatHistory({
            From: payload.From,
            history: { input: user_input, output: res.text },
          });
        }
        twiml.message(res.text);
    }

    return twiml.toString();
  }

  saveChatHistory(payload: any) {
    const newChatHistory = new this.chatHistoryModel(payload);
    return newChatHistory.save();
  }

  async findOneChatHistory(from_number: string) {
    return this.chatHistoryModel
      .findOne({ From: from_number, active: true })
      .then((history: ChatHistory) => {
        return history || undefined;
      })
      .catch((err) => console.log(err));
  }



  updateChatHistory(payload: any) {
    return this.chatHistoryModel
      .findOneAndUpdate(
        { From: payload.From, active: true },
        { $push: { history: payload.history } },
        { new: true }
      )
      .then((updatedHistory) => {
        return updatedHistory;
      })
      .catch((err) => console.log(err));
  }

  formatHistory(history: any) {
    return history.map((item) => {
      return `Human: ${item.input}
      AI: ${item.output}
      `;
    }).join(' ');
  }

  async deactivateChatHistory(payload: any) {
    return this.chatHistoryModel
      .findOneAndUpdate(
        { From: payload.From },
        { active: false },
        { new: true }
      )
      .then((updatedHistory) => {
        return updatedHistory;
      })
      .catch((err) => console.log(err));
    }





  remove(id: number) {
    return `This action removes a #${id} chat`;
  }

  findAll() {
    return `This action returns all chats`;
  }
}
