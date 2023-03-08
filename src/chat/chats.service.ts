import { Injectable } from "@nestjs/common";
import { PromptChatDto, PromptPrefixDto } from "./dto/create-chat.dto";
import { UpdateChatDto } from "./dto/update-chat.dto";
import { OpenAIApi, Configuration } from "openai";
import { InjectModel } from "@nestjs/mongoose";
import { PromptPrefixesDocument, TwilioDocument } from "./entities/chat.entity";
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
    private readonly twilioModel: Model<TwilioDocument>
  ) {}

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
    let completion;
    const convertedToLog = new this.twilioModel(payload);
    const twiml = new MessagingResponse();
    const payloadForChatbot = {
        max_tokens: 100,
        temperature: 0.5,
        model: "text-davinci-003",
        prompt: payload.Body,
        prefixes:['']

    }
    convertedToLog.save();
    switch (true) {
      case payload.Body.includes("/c"):
        //remove /chat from string
        payloadForChatbot.prompt = payloadForChatbot.prompt.replace("/chat", "");
        //call chatbot
        completion = await this.prompt(payloadForChatbot)
        console.log(completion);
        completion = completion.choices[0].text
        //send response
        twiml.message(completion);
        break;
      case payload.Body.includes("/r"):
        twiml.message("refreshing");
        break;
      case payload.Body.includes("/h"):
        twiml.message(`Commands:
        /chat - sends a message to the chatbot
        /refresh - refreshes the chatbot. The chatbot will forget the conversation and start over.
        /help - list all helpful commands for the chatbot`);
        break;

      default:
        twiml.message(
          "No Body param match, Twilio sends this in the request to your server."
        );
    }

    return twiml.toString();
    //response.type('text/xml').send(twiml.toString());
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
