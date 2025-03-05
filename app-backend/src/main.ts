import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`); // 
    next();
  })
  await app.listen(process.env.PORT ?? 3000, '0.0.0.0'); // 0.0.0.0 allows nest to accept connections from any ip address instead of only localhost
  }
bootstrap();
