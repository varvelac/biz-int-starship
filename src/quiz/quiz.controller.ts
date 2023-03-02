import { Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import { QuizService } from './quiz.service';
import { Shelter, Quiz } from './quiz.models';
import { ShelterUpdateDto } from './quizUpdate.dto';

@Controller('quizzes')
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

  @Get()
  readQuizzes(){
    return this.quiz_service.readQuizzes()
  }

  @Get(':id')
  async readQuizById(@Param('id') id:string){
    console.log('erftre')
    return this.quiz_service.readQuizById(id)
  }

  @Get('/random/:category')

  async getRandomQuestions(@Param('category') category:string){
    return this.quiz_service.getRandomQuestions(category)
  }

  @Post('/create')
  async createQuiz(@Body() userDto: Quiz){
    return this.quiz_service.createQuiz(userDto)
  }

}
