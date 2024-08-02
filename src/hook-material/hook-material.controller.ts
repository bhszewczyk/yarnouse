import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { HookMaterialService } from './hook-material.service';
import {
  CreateHookMaterialDto,
  createHookMaterialSchema,
} from './dto/create-hook-material.dto';
import { ZodValidationPipe } from 'src/pipes/zod-validation-pipe';

@Controller('api/hook-materials')
export class HookMaterialController {
  constructor(private readonly hookMaterialService: HookMaterialService) {}

  @Post()
  create(
    @Body(new ZodValidationPipe(createHookMaterialSchema))
    createHookMaterialDto: CreateHookMaterialDto,
  ) {
    return this.hookMaterialService.create(createHookMaterialDto);
  }

  @Get()
  findAll() {
    return this.hookMaterialService.findAll();
  }

  @Get(':name')
  findOne(@Param('name') name: string) {
    return this.hookMaterialService.findOne(name);
  }

  @Delete(':name')
  remove(@Param('name') id: string) {
    return this.hookMaterialService.remove(id);
  }
}
