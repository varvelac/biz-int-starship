import { Controller, Get } from '@nestjs/common';

@Controller('egg')
export class EggController {

  @Get()
  hello(){
    return "hello World"
  }
}
