import { Entity, Column, PrimaryGeneratedColumn, OneToMany, OneToOne, ManyToOne, ManyToMany} from 'typeorm';
import { Task } from '../task/task.entity';
import { Comment } from '../comment/comment.entity';
import { Team } from '../team/team.entity';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: String;

    @Column()
    password: String;

    @Column()
    email: String;

    @Column()
    rank: String;

    // relations
    @ManyToMany(() => Team, (team) => team.users)
    teams: Team[];

    @OneToMany(() => Task, (task) => task.user)
    tasks: Task[];

    @OneToMany(() => Comment, (comment) => comment.user)
    comments: Comment[];
}