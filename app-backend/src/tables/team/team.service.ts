import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Team } from './team.entity';
import { Repository } from 'typeorm';
import { CreateTeamDTO } from './dto/team.dto';

@Injectable()
export class TeamService {
  constructor(
    @InjectRepository(Team)
    private teamsRepository: Repository<Team>,
  ) {}
  
  async findAll(): Promise<Team[]> {
    return this.teamsRepository.find();
  }
  
  async findOneById(id: number): Promise<Team | null> {
    const team = await this.teamsRepository.findOne({
      where: {id},
      relations: ['users', 'projects']
    });
    return team;
  }
  
  async create(createTeamDto: CreateTeamDTO): Promise<Team> {
    const newTeam = this.teamsRepository.create(createTeamDto);
    return await this.teamsRepository.save(newTeam);
  }

  async update(id: number, data: CreateTeamDTO): Promise<Team> {
    const team = await this.teamsRepository.findOneBy({id});
    Object.assign(team, {
      ...data,
      users: data.userIds ? data.userIds.map(uIds => ({id: uIds})) : team.users,
      projects: data.projectIds ? data.projectIds.map(pIds => ({id: pIds})) : team.projects
    });
    return this.teamsRepository.save(team);
  }
  
  async deleteById(id: number): Promise<void> {
    await this.teamsRepository.delete(id);
  }
}
