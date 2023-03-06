import { CreateFinSentimentDto } from "./dto/create-fin_sentiment.dto";
import { UpdateFinSentimentDto } from "./dto/update-fin_sentiment.dto";
import { NewsRequest } from "./entities/fin_sentiment.entity";
export declare class FinSentimentsService {
    create(createFinSentimentDto: CreateFinSentimentDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateFinSentimentDto: UpdateFinSentimentDto): string;
    remove(id: number): string;
    getNews(params: NewsRequest): Promise<any>;
}
