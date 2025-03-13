import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany, JoinTable} from 'typeorm';
import { Team } from '../team/team.entity';
import { Task } from '../task/task.entity';

@Entity()
export class Project {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: String;

    @Column()
    deadline: Date;

    // relations
    @OneToMany(() => Task, task => task.project)
    tasks: Task[];

    @ManyToMany(() => Team, team => team.projects)
    teams: Team[];
}