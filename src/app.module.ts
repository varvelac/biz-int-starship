import { Module } from "@nestjs/common";
import { EggController } from "./egg/egg.controller";
import { MongooseModule } from '@nestjs/mongoose';
import { QuizSchema, ShelterSchema } from "./quiz/quiz.models";
import { QuizController } from "./quiz/quiz.controller";
import { QuizService } from "./quiz/quiz.service";
import { ChatsController } from "./chat/chats/chats.controller";
import { ChatsService } from "./chat/chats/chats.service";
@Module({
  controllers: [EggController, QuizController, ChatsController],
  providers: [QuizService, ChatsService],
  imports: [
    MongooseModule.forRoot(
      "mongodb+srv://qqadmin:qqadmin@cluster0.dvyfv8p.mongodb.net/?retryWrites=true&w=majority"
    ),
    MongooseModule.forFeature([
      { name: "shelters", schema: ShelterSchema },
      { name: "quizzes", schema: QuizSchema },
      { name: "quiz", schema: QuizSchema },
    ]),
  ],
})
export class AppModule {}
