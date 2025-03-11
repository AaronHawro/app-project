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
    
      async findOne(id: number): Promise<Team> {
        return this.teamsRepository.findOneBy({id});
      }
    
      async create(data: CreateTeamDTO): Promise<Team> {
        const newTeam = this.teamsRepository.create(data);
        return this.teamsRepository.save(newTeam);
      }

      async update(id: number, data: CreateTeamDTO): Promise<Team> {
        this.teamsRepository.update(id, data);
        return this.teamsRepository.findOneBy({id});
      }
    
      async deleteById(id: number): Promise<void> {
        await this.teamsRepository.delete(id);
      }
}
