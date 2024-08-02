import { Test, TestingModule } from '@nestjs/testing';
import { ConstituentsController } from './constituents.controller';
import { ConstituentsService } from './constituents.service';

describe('ConstituentsController', () => {
  let controller: ConstituentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConstituentsController],
      providers: [ConstituentsService],
    }).compile();

    controller = module.get<ConstituentsController>(ConstituentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
