import { Module } from '@nestjs/common';
import { FinSentimentsService } from './fin_sentiments.service';
import { FinSentimentsController } from './fin_sentiments.controller';

@Module({
  controllers: [FinSentimentsController],
  providers: [FinSentimentsService]
})
export class FinSentimentsModule {}
