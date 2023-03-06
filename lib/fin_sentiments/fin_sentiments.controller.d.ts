import { FinSentimentsService } from './fin_sentiments.service';
import { CreateFinSentimentDto } from './dto/create-fin_sentiment.dto';
import { UpdateFinSentimentDto } from './dto/update-fin_sentiment.dto';
import { NewsRequest } from './entities/fin_sentiment.entity';
export declare class FinSentimentsController {
    private readonly finSentimentsService;
    constructor(finSentimentsService: FinSentimentsService);
    create(createFinSentimentDto: CreateFinSentimentDto): string;
    getNews(params: NewsRequest): Promise<any>;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateFinSentimentDto: UpdateFinSentimentDto): string;
    remove(id: string): string;
}
