import { Body, Controller, Get, Post, ValidationPipe } from '@nestjs/common';
import { QuizService } from './quiz.service';
import { check } from './dto/check.dto';

@Controller('quiz')
export class QuizController {
    constructor(private readonly quizServ: QuizService) {}
    @Get()
    getquiz(){
        return this.quizServ.getquiz();
    }
    @Post()
    checkquiz(@Body(new ValidationPipe())validation: check) {
        return this.quizServ.checkquiz();
    }
}
