import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as fs from 'fs';

async function bootstrap() {
  const httpsOptions = { // HTTPS certification
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem'),
  };
  
  const app = await NestFactory.create(AppModule); // , {httpsOptions}

  app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`); // http request logging for debuging
    next();
  })

  app.enableCors();
    await app.listen(process.env.PORT ?? 3000, '0.0.0.0'); // 0.0.0.0 allows nest to accept connections from any ip address instead of only localhost
  }
bootstrap();
