import { Test, TestingModule } from '@nestjs/testing';
import { HookMaterialController } from './hook-material.controller';
import { HookMaterialService } from './hook-material.service';

describe('HookMaterialController', () => {
  let controller: HookMaterialController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HookMaterialController],
      providers: [HookMaterialService],
    }).compile();

    controller = module.get<HookMaterialController>(HookMaterialController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
