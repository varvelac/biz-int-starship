import { PartialType } from '@nestjs/mapped-types';
import { CreateFinSentimentDto } from './create-fin_sentiment.dto';

export class UpdateFinSentimentDto extends PartialType(CreateFinSentimentDto) {}
