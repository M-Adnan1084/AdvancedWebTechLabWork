import { Injectable } from '@nestjs/common';

@Injectable()
export class ExamsService 
{
    findAll() {
        return ['Exam 1', 'Exam 2', 'Exam 3']; // or actual DB fetch
      }
}
