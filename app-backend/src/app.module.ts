import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import * as dotenv from 'dotenv';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './tables/user/user.module';
import { TeamModule } from './tables/team/team.module';
import { TaskModule } from './tables/task/task.module';
import { ProjectModule } from './tables/project/project.module';
import { CommentModule } from './tables/comment/comment.module';


dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT!, 10),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      autoLoadEntities: true,
      synchronize: true, // !!ONLY TRUE FOR TIME OF DEVELOPMENT!!
    }),
    
    UserModule,
    TeamModule,
    TaskModule,
    ProjectModule,
    CommentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
