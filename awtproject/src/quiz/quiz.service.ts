import { Injectable } from '@nestjs/common';
import { Details } from './details.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class QuizService {
    constructor(@InjectRepository(Details) private myRepo: Repository<Details>){}
    getquiz() {
        return "Quiz data";
    }
    checkquiz() {
        return "Quiz checked";
    }
}
