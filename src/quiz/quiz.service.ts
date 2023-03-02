import { Injectable } from "@nestjs/common";
import { Shelter, Quiz, ShelterDocument, QuizDocument } from "./quiz.models";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";

@Injectable()
export class QuizService {
  constructor(
    @InjectModel("shelters")
    private readonly shelterModel: Model<ShelterDocument>,
    @InjectModel("quizzes") private readonly quizModel: Model<QuizDocument>
  ) {}

  //  creating a user
  async createShelter(shelter: Shelter): Promise<Shelter> {
    const newShelter = new this.shelterModel(shelter);
    return newShelter.save();
  }

  //  reading the user collection
  async readShelter() {
    return this.shelterModel
      .find({})
      .then((user) => {
        return user;
      })
      .catch((err) => console.log(err));
  }

  // upadting the data
  async updateShelter(id, data): Promise<Shelter> {
    return this.shelterModel.findByIdAndUpdate(id, data, { new: true });
  }

  // deleting the data
  async deleteShelter(id) {
    return this.shelterModel.findByIdAndRemove(id);
  }

  async readQuizzes() {
    return this.quizModel
      .find({})
      .then((user) => {
        return user;
      })
      .catch((err) => console.log(err));
  }

  async createQuiz(quiz: Quiz): Promise<Quiz> {
    const newQuiz = new this.quizModel(quiz);
    return newQuiz.save();
  }
  async readQuizById(id) {
    return this.quizModel
      .findOne({ quiz_id: id })
      .then((quiz) => {
        return quiz;
      })
      .catch((err) => console.log(err));
  }

  //random 100 questions
  async getRandomQuestions(category: string) {
    let categories : string[]= [];
    switch (category) {
      case "old":
        categories = ["300", "95", "260"]; // predefined hardcoded array
        break;
      case "new":
         categories = ["hair", "nails", "professional", "chemicals", "skin"]; // predefined hardcoded array
        break;
      default: 
      categories = [category]
    }
    
    console.log(categories);
    const regexes = categories.map((category) => new RegExp(category, "i")); // create regexes from the array
    return this.quizModel
      .aggregate([
        { $match: { category: { $in: regexes } } }, 
      ])
      .then((quizzes) => {
        console.log(quizzes, quizzes);
        // get questions from the quizzes
        let questions = quizzes.map((q) => q.questions);
        // flatten the array
        let flatQuestions = [].concat.apply([], questions);
        // shuffle the array
        let shuffledQuestions = flatQuestions.sort(() => 0.5 - Math.random());
        // get sub-array of first n elements after shuffled
        let selectedQuestions = shuffledQuestions.slice(0, 110);
        //create a return object
        let returnObject = new Quiz();
        returnObject.questions = selectedQuestions;
        returnObject.quiz_id = "random";
        returnObject.category = category;
        returnObject.name = `Random 100 ${category} questions`;
        return returnObject;
      })
      .catch((err) => console.log(err));
  }
}
