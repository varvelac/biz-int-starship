import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FinSentimentsService } from './fin_sentiments.service';
import { CreateFinSentimentDto } from './dto/create-fin_sentiment.dto';
import { UpdateFinSentimentDto } from './dto/update-fin_sentiment.dto';
import { NewsRequest } from './entities/fin_sentiment.entity';

@Controller('fin')
export class FinSentimentsController {
  constructor(private readonly finSentimentsService: FinSentimentsService) {}

  @Post()
  create(@Body() createFinSentimentDto: CreateFinSentimentDto) {
    return this.finSentimentsService.create(createFinSentimentDto);
  }

  @Post('/news')
  getNews(@Body() params: NewsRequest) {
    return this.finSentimentsService.getNews(params);
  }

  @Get()
  findAll() {
    return this.finSentimentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.finSentimentsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFinSentimentDto: UpdateFinSentimentDto) {
    return this.finSentimentsService.update(+id, updateFinSentimentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.finSentimentsService.remove(+id);
  }
}
