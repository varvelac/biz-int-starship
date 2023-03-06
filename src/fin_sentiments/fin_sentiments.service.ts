import { Injectable } from "@nestjs/common";
import { CreateFinSentimentDto } from "./dto/create-fin_sentiment.dto";
import { UpdateFinSentimentDto } from "./dto/update-fin_sentiment.dto";
import { NewsRequest } from "./entities/fin_sentiment.entity";
import axios from "axios";
@Injectable()
export class FinSentimentsService {
  create(createFinSentimentDto: CreateFinSentimentDto) {
    return "This action adds a new finSentiment";
  }

  findAll() {
    return `This action returns all finSentiments`;
  }

  findOne(id: number) {
    return `This action returns a #${id} finSentiment`;
  }

  update(id: number, updateFinSentimentDto: UpdateFinSentimentDto) {
    return `This action updates a #${id} finSentiment`;
  }

  remove(id: number) {
    return `This action removes a #${id} finSentiment`;
  }

 async getNews(params: NewsRequest) {

    const encodedParams = new URLSearchParams();
    encodedParams.append("symbol", params.symbol);
    
    const options = {
      method: 'POST',
      url: 'https://yfinance-stock-market-data.p.rapidapi.com/news',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': process.env.RAPID_API_KEY,
        'X-RapidAPI-Host': 'yfinance-stock-market-data.p.rapidapi.com'
      },
      data: encodedParams
    };
    
    const result = await axios.request(options).then(function (response) {
      return response.data; 
    })
    .catch(function (error) {
      console.error(error);
    });
   return result;
  }
}
