import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Restaurant {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  rest_name: string;

  @Column()
  food_name: string;

  @Column()
  rating: number;

  @Column()
  ingredients: string;

  @Column()
  price: number;

  @Column()
  img_Url: string;

  @Column()
  supp: string;

  @Column()
  longitude: string;

  @Column()
  latitude: string;
}
