import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ShelterDocument = Shelter & Document
export type QuizDocument = Quiz & Document

@Schema()
export class Shelter {
  @Prop()
  name: string;

  @Prop()
  unit_type: string;

  @Prop()
  number_of_units: number;

  @Prop()
  number_of_available: number;

  @Prop()
  tags: string[];

  @Prop({ default: Date.now })
  date_added: Date;
}

@Schema()
export class Quiz{

  @Prop()
  name: string;

  @Prop()
  quiz_id:string;

  @Prop()
  category: string;

  @Prop()
  questions: any[];

}


export const ShelterSchema = SchemaFactory.createForClass(Shelter)

export const QuizSchema = SchemaFactory.createForClass(Quiz)