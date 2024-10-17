import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EnvelopesModule } from './modules/envelopes/envelopes.module';

@Module({
  imports: [EnvelopesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
