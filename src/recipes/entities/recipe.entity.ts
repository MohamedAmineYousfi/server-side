import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Recipe {
    @PrimaryGeneratedColumn()
    public id: Number

    @Column()
    public recipeTitle: string 

    @Column({type :'timestamp' ,default: ()=>'CURRENT_TIMESTAMP'})
    public created_at : Date; 

    @Column()
    public content: string 

    
    @Column({default : 0})
    public likes: Number
 
    @Column()
    public imageUrl: string 

}
