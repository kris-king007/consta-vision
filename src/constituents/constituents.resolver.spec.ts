import { Test, TestingModule } from '@nestjs/testing';
import { ConstituentsResolver } from './constituents.resolver';
import { ConstituentsService } from './constituents.service';

describe('ConstituentsResolver', () => {
  let resolver: ConstituentsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConstituentsResolver, ConstituentsService],
    }).compile();

    resolver = module.get<ConstituentsResolver>(ConstituentsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
