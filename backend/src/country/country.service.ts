import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class CountryService {
  constructor(private readonly httpService: HttpService) {}

  async findAll(): Promise<any> {
    const apiUrl = 'https://date.nager.at/api/v3/AvailableCountries';

    try {
      const response = await firstValueFrom(this.httpService.get(apiUrl));
      return response.data;
    } catch (error) {
      throw new Error(`Erro ao consultar a API: ${error.message}`);
    }
  }
}
