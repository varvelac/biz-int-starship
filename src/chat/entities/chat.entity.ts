import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';


export type PromptPrefixesDocument = PromptPrefixes & Document
export type TwilioDocument = Twilio & Document

@Schema()
export class PromptPrefixes{

  @Prop()
  name: string;

  @Prop()
  prompt:string;

  @Prop()
  description: string;

}

@Schema()
export class Twilio{

  @Prop()
  Body: string
  @Prop()
  From: string
  @Prop()
  SmsMessageSid: string

}

export const PromptPrefixesSchema = SchemaFactory.createForClass(PromptPrefixes)
export const TwilioSchema = SchemaFactory.createForClass(Twilio)