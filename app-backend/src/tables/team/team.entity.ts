import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToOne, OneToMany, ManyToMany} from 'typeorm';
import { User } from '../user/user.entity';
import { Project } from '../project/project.entity';

@Entity()
export class Team {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: String;

    // relations
    @ManyToMany(() => User, (user) => user.teams)
    users: User[];

    @ManyToMany(() => Project, (project) => project.teams)
    projects: Project[];
}