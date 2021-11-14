import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Recipe {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public recipeTitle: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  public created_at: Date;

  @Column({ default: 0, nullable: true })
  public likes: number;

  @Column({ default: '' })
  public imageUrl: string;

  @Column({ default: 0 })
  public kcal: number;

  @Column({ default: 0 })
  public fat: number;

  @Column({ default: 0 })
  public carb: number;

  @Column({ default: 0 })
  public saturates: number;

  @Column({ default: 0 })
  public sugar: number;

  @Column({ default: 0 })
  public fibre: number;

  @Column({ default: 0 })
  public protein: number;

  @Column({ default: 0 })
  public salt: number;

  @Column({ default: '' })
  public ingredients: string;

  @Column({ default: '' })
  public methodes: string;
}
