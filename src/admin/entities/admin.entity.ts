import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class Admin {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    first_Name: string;
  
    @Column()
    last_Name: string;
     
    @Column()
    email: string;
  
  
    @Column()
    password_hashed: string;

    @Column({default : ''})
    salt: string;

    @Column()
    phone_Num: number;

    @Column({type :'timestamp' ,default: ()=>'CURRENT_TIMESTAMP'})
    createdAt: Date;
  
}

