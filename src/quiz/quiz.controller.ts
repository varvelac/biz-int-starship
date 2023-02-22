import { Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import { QuizService } from './quiz.service';
import { Shelter, Quiz } from './quiz.models';
import { ShelterUpdateDto } from './quizUpdate.dto';

@Controller()
export class QuizController {
  constructor(private readonly quiz_service: QuizService) {}

  @Post('/shelters/create')
  async createShelter(@Body() userDto: Shelter){
    return this.quiz_service.createShelter(userDto)
  }

  @Get('/shelters/')
  readShelter(){
    return this.quiz_service.readShelter()
  }

  @Put('/shelters:id')
  async updateShelter(
    @Param('id') id:string ,@Body() updateData:ShelterUpdateDto
    ):Promise<Shelter>{
    return this.quiz_service.updateShelter(id,updateData)
  }

  @Delete(':id')
  async deleteShelter(@Param('id') id:string){
    return this.quiz_service.deleteShelter(id)
  }

  @Get('/quizzes/')
  readQuizzes(){
    return this.quiz_service.readQuizzes()
  }

  @Get('/quiz:id')
  readQuizById(id){
    return this.quiz_service.readQuizById(id)
  }

  @Post('/quizzes/create')
  async createQuiz(@Body() userDto: Quiz){
    return this.quiz_service.createQuiz(userDto)
  }

}
