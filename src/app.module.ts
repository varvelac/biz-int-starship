import { Module } from "@nestjs/common";
import { MongooseModule } from '@nestjs/mongoose';
import { QuizSchema, ShelterSchema } from "./quiz/quiz.models";
import { QuizController } from "./quiz/quiz.controller";
import { QuizService } from "./quiz/quiz.service";
import { ChatsController } from "./chat/chats.controller";
import { ChatsService } from "./chat/chats.service";
import { ChatHistorySchema, PromptPrefixesSchema, TwilioSchema } from "./chat/entities/chat.entity";
import { FinSentimentsService } from "./fin_sentiments/fin_sentiments.service";
import { FinSentimentsController } from "./fin_sentiments/fin_sentiments.controller";

require('dotenv').config();
@Module({
  controllers: [QuizController, ChatsController, FinSentimentsController],
  providers: [QuizService, ChatsService, FinSentimentsService ],
  imports: [
    MongooseModule.forRoot(
      process.env.MONGO_URI,
    ),
    MongooseModule.forFeature([
      { name: "shelters", schema: ShelterSchema },
      { name: "quizzes", schema: QuizSchema },
      { name: "quiz", schema: QuizSchema },
      { name: "prefixes", schema: PromptPrefixesSchema },
      { name: "twilio", schema: TwilioSchema },
      { name: "chatHistory", schema: ChatHistorySchema },
    ]),
  ],
})
export class AppModule {}
