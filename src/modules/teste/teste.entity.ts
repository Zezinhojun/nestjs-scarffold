import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('teste')
export class TesteEntity {
  @PrimaryGeneratedColumn() id: number;

  @Column() name: string;
}
