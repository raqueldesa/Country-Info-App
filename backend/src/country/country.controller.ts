import { Body, Controller, Get, Post } from '@nestjs/common';
import { CountryService } from './country.service';

@Controller('countries')
export class CountryController {
  constructor(private readonly countryService: CountryService) {}
  @Get()
  findAll(): Promise<any> {
    return this.countryService.findAll();
  }

  @Post('info')
  async findInfoCountry(
    @Body('name') name: string,
    @Body('countryCode') countryCode: string,
  ): Promise<any> {
    return this.countryService.findInfoCountry({ name, countryCode });
  }
}
