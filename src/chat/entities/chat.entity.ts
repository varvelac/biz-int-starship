import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';


export type PromptPrefixesDocument = PromptPrefixes & Document

@Schema()
export class PromptPrefixes{

  @Prop()
  name: string;

  @Prop()
  prompt:string;

  @Prop()
  description: string;

}

export const PromptPrefixesSchema = SchemaFactory.createForClass(PromptPrefixes)