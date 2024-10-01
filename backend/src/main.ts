import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Acesse o ConfigService para obter o valor da porta
  const configService = app.get(ConfigService);
  const port = configService.get<number>('PORT_BACKEND') || 5000; // Porta padrão caso não esteja definida

  await app.listen(port);
  console.log(`Server running on port ${port}`);
}
bootstrap();
