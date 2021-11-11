import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Blog {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public user_id: number

    @Column()
    public blogTitle: string;

    @Column()
    public imageUrl: string;

    @Column()
    public content: string;

    @Column()
    public date: Date;
   

    @Column()
    public like: number;

}
