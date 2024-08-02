import { Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'hook_material' })
export class HookMaterial {
  @PrimaryColumn()
  name: string;
}
