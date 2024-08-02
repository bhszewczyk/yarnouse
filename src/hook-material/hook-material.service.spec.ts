import { Test, TestingModule } from '@nestjs/testing';
import { HookMaterialService } from './hook-material.service';

describe('HookMaterialService', () => {
  let service: HookMaterialService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HookMaterialService],
    }).compile();

    service = module.get<HookMaterialService>(HookMaterialService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
