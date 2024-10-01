import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CountryModule } from './country/country.module';
import { HttpModule } from '@nestjs/axios';
import { CountryService } from './country/country.service';
@Module({
  imports: [CountryModule, HttpModule],
  controllers: [AppController],
  providers: [AppService, CountryService],
})
export class AppModule {}
