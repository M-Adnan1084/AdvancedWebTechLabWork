import { Injectable } from '@nestjs/common';

@Injectable()
export class QuizService {
    getquiz() {
        return "Quiz data";
    }
    checkquiz() {
        return "Quiz checked";
    }
}
