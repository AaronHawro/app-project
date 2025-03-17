import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany, JoinTable} from 'typeorm';
import { User } from '../user/user.entity';
import { Project } from '../project/project.entity';

@Entity()
export class Team {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    // relations
    @OneToMany(() => User, user => user.team)
    users: User[];

    @ManyToMany(() => Project, project => project.teams)
    @JoinTable()
    projects: Project[];
}