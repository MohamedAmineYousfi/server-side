/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Recipe {
    @PrimaryGeneratedColumn()
    public id: number

    @Column()
    public recipeTitle: string 

    @Column({type :'timestamp' ,default: ()=>'CURRENT_TIMESTAMP'})
    public created_at : Date; 

    @Column()
    public content: string 

    
    @Column({default : 0,nullable:true})
    public likes: number
 
    @Column()
    public imageUrl: string 

    @Column({default : 0})
    public Kcal : number 
    
    @Column({default : 0})
    public fat : number 

    @Column({default : 0})
    public carb : number

    @Column({default : 0})
    saturates : number 

    @Column({default : 0})
    sugar : number 

    @Column({default : 0})
    fibre : number 

    @Column({default : 0})
    protein : number
    
    @Column({default : 0})
    salt :number

    @Column({default : ''})
    ingredients : string 

    @Column({default : ''})
    methodes : string

}
