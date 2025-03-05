import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany} from 'typeorm';
import { User } from '../user/user.entity';
import { Project } from '../project/project.entity';
import { Comment } from '../comment/comment.entity';

@Entity()
export class Task {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: String;

    @Column()
    status: String;
    
    @Column()
    placement: number;

    // relations
    @ManyToOne(() => User, (user) => user.tasks)
    user: User;

    @ManyToOne(() => Project, (project) => project.tasks)
    project: Project;

    @OneToMany(() => Comment, (comment) => comment.task)
    comments: Comment[];
}