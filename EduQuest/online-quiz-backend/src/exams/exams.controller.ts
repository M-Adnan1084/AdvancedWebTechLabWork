import { Controller, Get } from '@nestjs/common';
import { ExamsService } from './exams.service';
import { Roles } from 'src/common/decorators/roles.decorator';

@Controller('exams')
export class ExamsController 
{
    constructor(private readonly examsService: ExamsService) {}
    
    @Get()
    findAll() {
      return this.examsService.findAll();
    }
    }
    @Controller('admin')
    export class AdminController 
    {
        @Get('dashboard')
      @Roles('admin') // Only admins can access
      getAdminDashboard() {
        return 'Welcome to Admin Dashboard';
    }
}
