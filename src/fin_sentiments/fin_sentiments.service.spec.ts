import { Test, TestingModule } from '@nestjs/testing';
import { FinSentimentsService } from './fin_sentiments.service';

describe('FinSentimentsService', () => {
  let service: FinSentimentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FinSentimentsService],
    }).compile();

    service = module.get<FinSentimentsService>(FinSentimentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
