import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { HookSizeService } from './hook-size.service';
import {
  CreateHookSizeDto,
  createHookSizeSchema,
} from './dto/create-hook-size.dto';
import { ZodValidationPipe } from 'src/pipes/zod-validation-pipe';

@Controller('api/hook-sizes')
export class HookSizeController {
  constructor(private readonly hookSizeService: HookSizeService) {}

  @Post()
  create(
    @Body(new ZodValidationPipe(createHookSizeSchema))
    createHookSizeDto: CreateHookSizeDto,
  ) {
    return this.hookSizeService.create(createHookSizeDto);
  }

  @Get()
  findAll() {
    return this.hookSizeService.findAll();
  }

  @Get(':size')
  findOne(@Param('size') size: number) {
    return this.hookSizeService.findOne(size);
  }

  @Delete(':size')
  remove(@Param('size') size: number) {
    return this.hookSizeService.remove(size);
  }
}
