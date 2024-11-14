import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { HttpModule } from './http.module';
import { MailService } from './mail/mail.service';
import { SMTPMailService } from './mail/smtp-mail.service';

@Module({
  imports: [HttpModule],
  controllers: [AppController],
  providers: [{
    provide: MailService,
    useClass: SMTPMailService
  }],
})
export class AppModule { }
