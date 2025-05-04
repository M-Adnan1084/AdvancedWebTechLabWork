import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export enum UserRole {
  ADMIN = 'admin',
  STUDENT = 'student',
  TEACHER = 'teacher',
  MODERATOR = 'moderator',
}

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.STUDENT,
  })
  role: UserRole;
}
