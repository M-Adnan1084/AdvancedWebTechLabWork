import { User } from "src/users/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Exam {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column({ nullable: true })
  description: string;

  @ManyToOne(() => User)
  creator: User;

  @Column({ default: 'pending' })
  status: 'pending' | 'approved' | 'rejected';
}
