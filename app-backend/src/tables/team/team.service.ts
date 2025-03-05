import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Team } from './team.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TeamService {
      constructor(
        @InjectRepository(Team)
        private TeamsRepository: Repository<Team>,
      ) {}
    
      async findAll(): Promise<Team[]> {
        return this.TeamsRepository.find();
      }
    
      async findOne(id: number): Promise<Team> {
        return this.TeamsRepository.findOneBy({id});
      }
    
      async create(team: Partial<Team>): Promise<Team> {
        const newTeam = this.TeamsRepository.create(team);
        return this.TeamsRepository.save(newTeam);
      }
    
      async deleteById(id: number): Promise<void> {
        await this.TeamsRepository.delete(id);
      }
}
