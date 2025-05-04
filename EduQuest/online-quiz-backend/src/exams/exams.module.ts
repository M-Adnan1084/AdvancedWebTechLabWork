import { Injectable, Module } from '@nestjs/common';
import { ExamsService } from './exams.service';
import { ExamsController } from './exams.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Exam } from './exam.entity';
import { Repository } from 'typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Exam])], // Add your entities here
  providers: [ExamsService],
  controllers: [ExamsController],
})
export class ExamsModule 
{
  
}
