import { Module } from '@nestjs/common';
import { HookMaterialService } from './hook-material.service';
import { HookMaterialController } from './hook-material.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HookMaterial } from './entities/hook-material.entity';

@Module({
  imports: [TypeOrmModule.forFeature([HookMaterial])],
  controllers: [HookMaterialController],
  providers: [HookMaterialService],
})
export class HookMaterialModule {}
