import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateHookSizeDto } from './dto/create-hook-size.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { checkIfRecordExists } from 'src/utils/check-if-record-exists';
import { HookSize } from './entities/hook-size.entity';

@Injectable()
export class HookSizeService {
  constructor(
    @InjectRepository(HookSize)
    private readonly hookSizeRepository: Repository<HookSize>,
  ) {}

  async create(createHookSizeDto: CreateHookSizeDto) {
    const existingRecord = await checkIfRecordExists({
      repository: this.hookSizeRepository,
      initialQuery: { key: 'size', value: createHookSizeDto.size },
    });

    if (existingRecord) throw new BadRequestException('Size already exists');

    return this.hookSizeRepository.save({ size: createHookSizeDto.size });
  }

  findAll() {
    return this.hookSizeRepository.find();
  }

  findOne(size: number) {
    return this.hookSizeRepository.findOneBy({ size: size });
  }

  async remove(size: number) {
    const existingRecord = await checkIfRecordExists({
      repository: this.hookSizeRepository,
      initialQuery: { key: 'size', value: size },
    });

    if (!existingRecord) throw new BadRequestException('No such hook size');

    await this.hookSizeRepository.remove(existingRecord);
  }
}
