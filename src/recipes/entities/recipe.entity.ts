import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Recipe {
    @PrimaryGeneratedColumn()
    id: Number

    @Column()
    recipeTitle: string 

    @Column({type :'timestamp' ,default: ()=>'CURRENT_TIMESTAMP'})
    public created_at : Date; 


    @Column()
    content: string 

    
    @Column()
    likes: Number

 
    @Column()
    imageUrl: string 

}
