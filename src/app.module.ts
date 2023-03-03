import { Module } from "@nestjs/common";
import { EggController } from "./egg/egg.controller";
import { MongooseModule } from '@nestjs/mongoose';
import { QuizSchema, ShelterSchema } from "./quiz/quiz.models";
import { QuizController } from "./quiz/quiz.controller";
import { QuizService } from "./quiz/quiz.service";
import { ChatsController } from "./chat/chats.controller";
import { ChatsService } from "./chat/chats.service";
import { PromptPrefixesSchema } from "./chat/entities/chat.entity";
require('dotenv').config();
@Module({
  controllers: [EggController, QuizController, ChatsController],
  providers: [QuizService, ChatsService ],
  imports: [
    MongooseModule.forRoot(
      process.env.MONGO_URI,
    ),
    MongooseModule.forFeature([
      { name: "shelters", schema: ShelterSchema },
      { name: "quizzes", schema: QuizSchema },
      { name: "quiz", schema: QuizSchema },
      { name: "prefixes", schema: PromptPrefixesSchema },
    ]),
  ],
})
export class AppModule {}
