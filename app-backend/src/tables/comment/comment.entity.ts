import { Entity, Column, PrimaryGeneratedColumn, ManyToOne} from 'typeorm';
import { User } from '../user/user.entity';
import { Task } from '../task/task.entity';

@Entity()
export class Comment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    comment: string;

    // relations
    @ManyToOne(() => User, user => user.comments)
    user: User;

    @ManyToOne(() => Task, task => task.comments)
    task: Task;
}