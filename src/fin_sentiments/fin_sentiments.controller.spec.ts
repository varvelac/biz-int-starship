import { Test, TestingModule } from '@nestjs/testing';
import { FinSentimentsController } from './fin_sentiments.controller';
import { FinSentimentsService } from './fin_sentiments.service';

describe('FinSentimentsController', () => {
  let controller: FinSentimentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FinSentimentsController],
      providers: [FinSentimentsService],
    }).compile();

    controller = module.get<FinSentimentsController>(FinSentimentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
