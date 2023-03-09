import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type PromptPrefixesDocument = PromptPrefixes & Document;
export type TwilioDocument = Twilio & Document;
export type ChatHistoryDocument = ChatHistory & Document;

@Schema()
export class PromptPrefixes {
  @Prop()
  name: string;

  @Prop()
  prompt: string;

  @Prop()
  description: string;
}

@Schema()
export class Twilio {
  @Prop()
  Body: string;
  @Prop()
  From: string;
  @Prop()
  SmsMessageSid: string;
  @Prop()
  ToCountry: string;
  @Prop()
  ToState: string;
  @Prop()
  NumMedia: string;
  @Prop()
  ToCity: string;
  @Prop()
  FromZip: string;
  @Prop()
  SmsSid: string;
  @Prop()
  FromState: string;
  @Prop()
  SmsStatus: string;
  @Prop()
  FromCity: string;
  @Prop()
  FromCountry: string;
  @Prop()
  To: string;
  @Prop()
  ToZip: string;
  @Prop()
  NumSegments: string;
  @Prop()
  MessageSid: string;
  @Prop()
  AccountSid: string;
  @Prop()
  ApiVersion: string;
}

@Schema()
export class ChatHistory {
  @Prop()
  SmsMessageSid: string;

  @Prop()
  history: any[];

  @Prop()
  From: string;

  @Prop()
  To: string;

  @Prop()
  active: boolean;
}

export const PromptPrefixesSchema = SchemaFactory.createForClass(PromptPrefixes);
export const TwilioSchema = SchemaFactory.createForClass(Twilio);
export const ChatHistorySchema = SchemaFactory.createForClass(ChatHistory);
