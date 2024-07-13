import { Body, Controller, Get, Post, Headers } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('/metrics')
  getMetrics(@Headers() headers: any) {
    console.log(headers['x-id'])
    return this.appService.getMetrics();
  }

  @Post('/metrics')
  setMetrics(@Body() metrics: any) {
    return this.appService.setMetrics(metrics);
  }
}
