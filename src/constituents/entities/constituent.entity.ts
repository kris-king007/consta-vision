import {
    Entity,
    Column,
    CreateDateColumn,
    PrimaryGeneratedColumn,
    Unique,
    UpdateDateColumn,
} from 'typeorm';

@Entity()
@Unique(["email"])
export class Constituent {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;
  
    @Column()
    firstName: string;
  
    @Column()
    lastName: string;

    @Column()
    address: string; // TODO: Make an Address class to use here instead.
  
    @Column({ default: true })
    isActive: boolean;

    @CreateDateColumn()
    creationDate: Date;

    @UpdateDateColumn()
    updatedDate: Date;
}
