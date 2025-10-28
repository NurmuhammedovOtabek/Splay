import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function start() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix("api")
  const PORT = process.env.PORT ?? 3030;
  await app.listen(PORT,()=>{
    console.log(`crated started at: http://localhost:${PORT}`);
  });
}
start();
