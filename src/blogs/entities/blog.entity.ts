import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Blog {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public blogTitle: string;

  @Column()
  public imageUrl: string;

  @Column({ type: 'varchar', length: 300 })
  public content: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  public date: Date;

  @Column({ default: 0, nullable: true })
  public like: number;
}
