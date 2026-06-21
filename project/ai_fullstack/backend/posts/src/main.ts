import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// 将nestjs 像express 一样拥有一些服务  吸星大法
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    cors: true
  });
  app.setGlobalPrefix('api'); // 全局路由前缀/api
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
