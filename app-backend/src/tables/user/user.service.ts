import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { CreateUserDTO } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async findById(id: number): Promise<User> {
    return this.usersRepository.findOneBy({id});
  }

  async findByUsername(username: string): Promise<User | null> {
    return this.usersRepository.findOneBy({username});
  }

  async create(data: CreateUserDTO): Promise<User> {
    const newUser = this.usersRepository.create(data);
    return this.usersRepository.save(newUser);
  }

  async update(id: number, data: CreateUserDTO): Promise<User> {
    // this.usersRepository.update(id, data);
    // return this.usersRepository.findOneBy({id});

    const user = await this.usersRepository.findOneBy({id});
    Object.assign(user, data);
    return this.usersRepository.save(user);
  }

  async deleteById(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
