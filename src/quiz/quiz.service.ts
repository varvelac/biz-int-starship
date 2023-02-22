import { Injectable } from '@nestjs/common';
import { Shelter, Quiz, ShelterDocument, QuizDocument } from './quiz.models';
import {Model} from 'mongoose'
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class QuizService {
  constructor(
    @InjectModel('shelters') private readonly shelterModel: Model<ShelterDocument>,
    @InjectModel('quizzes') private readonly quizModel: Model<QuizDocument>
  ){}

  //  creating a user 
  async createShelter(shelter: Shelter): Promise<Shelter>{
     const newShelter = new this.shelterModel(shelter)
     return newShelter.save()
  }

  //  reading the user collection 
  async readShelter(){
    return this.shelterModel.find({})
    .then((user)=>{return user})
    .catch((err)=>console.log(err))
  }

  // upadting the data
  async updateShelter(id,data):Promise<Shelter>{
    return this.shelterModel.findByIdAndUpdate(id,data,{new:true})
  }

  // deleting the data 
  async deleteShelter(id){
    return this.shelterModel.findByIdAndRemove(id)
  }

  async readQuizzes(){
    return this.quizModel.find({})
    .then((user)=>{return user})
    .catch((err)=>console.log(err))
  }

  async createQuiz(quiz: Quiz): Promise<Quiz>{
    const newQuiz = new this.quizModel(quiz)
    return newQuiz.save()
 }
 async readQuizById(id){
  return this.quizModel.findOne({ quiz_id: id } )
  .then((quiz)=>{return quiz})
  .catch((err)=>console.log(err))
}
}
