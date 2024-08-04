import { Module } from '@nestjs/common';
import { HookSizeService } from './hook-size.service';
import { HookSizeController } from './hook-size.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HookSize } from './entities/hook-size.entity';

@Module({
  imports: [TypeOrmModule.forFeature([HookSize])],
  controllers: [HookSizeController],
  providers: [HookSizeService],
})
export class HookSizeModule {}
