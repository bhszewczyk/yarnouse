import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateHookMaterialDto } from './dto/create-hook-material.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { HookMaterial } from './entities/hook-material.entity';
import { Repository } from 'typeorm';
import { checkIfRecordExists } from 'src/utils/check-if-record-exists';

@Injectable()
export class HookMaterialService {
  constructor(
    @InjectRepository(HookMaterial)
    private readonly hookMaterialRepository: Repository<HookMaterial>,
  ) {}

  async create(createHookMaterialDto: CreateHookMaterialDto) {
    const recordExists = await checkIfRecordExists({
      repository: this.hookMaterialRepository,
      initialQuery: { key: 'name', value: createHookMaterialDto.name },
    });

    if (recordExists) throw new BadRequestException('Material already exists');

    return this.hookMaterialRepository.save({
      name: createHookMaterialDto.name,
    });
  }

  findAll() {
    return this.hookMaterialRepository.find();
  }

  findOne(name: string) {
    return this.hookMaterialRepository.findOneBy({ name: name });
  }

  async remove(name: string) {
    const existingRecord = await checkIfRecordExists({
      repository: this.hookMaterialRepository,
      initialQuery: { key: 'name', value: name },
    });

    if (!existingRecord) throw new BadRequestException('No such material');

    await this.hookMaterialRepository.remove(existingRecord);
  }
}
