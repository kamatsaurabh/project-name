import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  console.log('FACEBOOK_CLIENT_ID:', configService.get('FACEBOOK_CLIENT_ID')); // Debugging

  app.enableCors({ origin: 'http://localhost:4200', credentials: true });

  await app.listen(3000);
}
bootstrap();