import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/api')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getMetrics() {
    console.log('call');
    return this.appService.getMetrics();
  }
}
