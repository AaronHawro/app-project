import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne} from 'typeorm';
import { Task } from '../task/task.entity';
import { Comment } from '../comment/comment.entity';
import { Team } from '../team/team.entity';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    username: string;

    @Column()
    password: string;

    @Column()
    email: string;

    @Column()
    rank: string;

    // relations
    @ManyToOne(() => Team, team => team.users)
    team: Team;

    @OneToMany(() => Task, task => task.user)
    tasks: Task[];

    @OneToMany(() => Comment, comment => comment.user)
    comments: Comment[];
}