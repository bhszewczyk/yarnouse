import { Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'hook_size' })
export class HookSize {
  @PrimaryColumn()
  size: number;
}
