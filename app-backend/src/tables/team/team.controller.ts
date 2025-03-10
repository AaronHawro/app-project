import { Body, Controller, Delete, Get, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { TeamService } from './team.service';
import { Team } from './team.entity';
import { CreateTeamDTO } from './dto/team.dto';

@Controller('team')
export class TeamController {
    constructor(private readonly teamService: TeamService){}

    @Get()
    getTeams(): Promise<Team[]> {
        return this.teamService.findAll();
    }

    @Get('/:id')
    getTeam(@Param() params: {id: number}): Promise<Team> {
        return this.teamService.findOne(params.id);
    }

    @Post()
    @UsePipes(new ValidationPipe())
    createTeam(@Body() body: CreateTeamDTO): Promise<Team> {
        return this.teamService.create(body);
    }

    @Delete('/:id')
    deleteTeam(@Param() params: {id: number}): Promise<void> {
        return this.teamService.deleteById(params.id);
    }
}
