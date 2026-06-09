import { Controller, Get, Post, Body } from '@nestjs/common'
import { AppService } from './app.service'

@Controller()
export class AppController {
  // service 实例
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello() :string {
    return this.appService.getHello()
  }

  @Get('welcome')
  getWelcome() :string {
    return this.appService.getWelcome()
  }

  @Post('login')
  login(@Body() body: {username: string, password: string}){
    const { username, password } = body;
    console.log(username, password);
    if(!username || !password){
      return {
        code: 400,
        message: '用户名或密码不能为空'
      }
    }
    if(password.length < 6){
      return {
        code: 400,
        message: '密码长度不能小于6'
      }
    }
    return this.appService.handleLogin(username, password)
  }
}