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

    @Column({default : 0,nullable:true})
    public Kcal : number 
    
    @Column({default : 0,nullable:true})
    public fat : number 

    @Column({default : 0,nullable:true})
    public carb : number

}
